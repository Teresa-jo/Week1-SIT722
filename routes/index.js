var express = require('express');
var router = express.Router();

const nameList = [
  { 'id': 1, 'name': 'John', 'email': 'aaa' },
  { 'id': 2, 'name': 'James', 'email': 'abc' },
  { 'id': 3, 'name': 'David', 'email': 'adc' },
  { 'id': 4, 'name': 'David', 'email': 'adc' },
  { 'id': 5, 'name': 'David', 'email': 'adc' },
  { 'id': 6, 'name': 'David', 'email': 'adc' },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'SIT722 DevOps Glossary',
    sub: 'my website showing a collection of DevOps terms and their brief descriptions',
    names: nameList
  });
});

module.exports = router;
