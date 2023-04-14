var bat = require('../models/bat');
// List of all bats
exports.bat_list = async function (req, res) {
    try{
    thebats = await bat.find();
    console.log(thebats);
    res.send(thebats);
    
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

//for a specific Bat.
exports.bat_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await bat.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};


// // for a specific bat.
// exports.bat_detail = function(req, res) {
//  res.send('NOT IMPLEMENTED: bat detail: ' + req.params.id);
// };
// // Handle bat create on POST.
// exports.bat_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: bat create POST');
// };
// // Handle bat delete form on DELETE.
// exports.bat_delete = function(req, res) {
//  res.send('NOT IMPLEMENTED: bat delete DELETE ' + req.params.id);
// };
// // Handle bat update form on PUT.
// exports.bat_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: bat update PUT' + req.params.id);
// };
// VIEWS
// Handle a show all view
exports.bat_view_all_Page = async function(req, res) {
    try{
    theBats = await bat.find();
    res.render('bat', { title: 'bat Search Results', results: thebats });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle bat create on POST.
exports.bat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new bat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    //{"bat_size":6, "bat_type":"sports", "bat_brand":"NIKE"}
    document.bat_size = req.body.bat_size;
    document.bat_type = req.body.bat_type;
    document.bat_cost = req.body.bat_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };