var express = require('express');
const bat_controlers= require('../controllers/bat');
var router = express.Router();


/* Get bat */
router.get('/', bat_controlers.bat_view_all_Page );
/* GET detail bat page */
router.get('/detail', bat_controlers.bat_view_one_Page);
/* GET create bat page */
router.get('/create', bat_controlers.bat_create_Page);
/* GET update bat page */
router.get('/update', bat_controlers.bat_update_Page);
/* GET delete bat page */
router.get('/delete', bat_controlers.bat_delete_Page);
module.exports = router;
