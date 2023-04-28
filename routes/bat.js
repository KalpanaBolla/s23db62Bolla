var express = require('express');
const bat_controlers= require('../controllers/bat');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* Get bat */
router.get('/', bat_controlers.bat_view_all_Page );
/* GET detail bat page */
router.get('/detail', bat_controlers.bat_view_one_Page);
/* GET create bat page */
router.get('/create', secured, bat_controlers.bat_create_Page);
/* GET update bat page */
router.get('/update', secured, bat_controlers.bat_update_Page);
/* GET delete bat page */
router.get('/delete', secured, bat_controlers.bat_delete_Page);
module.exports = router;
