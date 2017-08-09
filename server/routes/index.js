var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    // res.send('respond with a resource');
    res.render('home/index', {
      title: '你好',
      layout: false});
});

module.exports = router;
