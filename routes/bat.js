var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bat', { title: 'Search Results of bat class' });
});

/* Get bat */
router.get('/', bat_controlers.bat_view_all_Page );
/* GET detail bat page */
router.get('/detail', bat_controlers.bat_view_one_Page);
module.exports = router;