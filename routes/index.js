var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', 
  sub: 'my website showing a collection of DevOps terms and their brief descriptions.', names: nameList  });
});

module.exports = router;