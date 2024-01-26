var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const Nyear = new Date
    year = Nyear.getFullYear();
    console.log(year.yea)
    res.json({ year })
});

module.exports = router;
