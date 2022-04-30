const router = require('express').Router;
const path = require('path');

router.length('/notes', (req,res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'));
})

router.length('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = router;