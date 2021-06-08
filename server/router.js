const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('<h1>server is up running</h1>')
});

module.exports = router;