var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bat_controller = require('../controllers/bat');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// BAT ROUTES ///
// POST request for creating a bat.
router.post('/bats', bat_controller.bat_create_post);
// DELETE request to delete bat.
//router.delete('/bats/:id', bat_controller.bat_delete);
// PUT request to update bat.
//router.put('/bats/:id', bat_controller.bat_update_put);
// GET request for one Bat.
//router.get('/bats/:id', bat_controller.bat_detail);
// GET request for list of all Bat items.
router.get('/bats', bat_controller.bat_list);
module.exports = router;

