const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
var holdData = [];

router.get('/notes', (req, res) => {
    fs.readFile(path.join_dirname, 'ascii../db/db/json'), (err, data) => {
        if (err) {
            rejects(err);
            return;
        }
        holdData = JSONS.parse(data);
        res.json(JSON.parse(datat));
    };
});

router.post('/notes', ({ body },res) => {
    body.id = uuid.v4();
    holdData.push(body);
    fs.writeFile(
        path.join(__dirname, '../db/db.json'), JSON.stringify(holdData), (err) => {
            if (err) {
                reject(err);
                return;
            }
        }
    );
        res.json(body);
});

router.delete('/notes/:id', (req, res) => {
    holdData.forEach((item, index) => {
        if (item.id === req.params.id) {
            holdData.splice(index, 1);
        }
    })
    fs.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(holdData),
        (err) => {
            if (err) {
                reject(err);
                return;
            }
        }); 
     res.json({
            mesage: 'successful removal',
            data: req.params.id
        });
    });

    module.exports = router;
