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


//Handle Bat update form on PUT.
exports.bat_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await bat.findById( req.params.id)
// Do updates of properties
if(req.body.bat_type)
toUpdate.bat_type = req.body.bat_type;
if(req.body.bat_size) toUpdate.bat_size = req.body.bat_size;
if(req.body.bat_cost) toUpdate.bat_cost = req.body.bat_cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
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
   // Handle Ball delete on DELETE.
exports.bat_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await bat.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };


    // Handle a show one view with id specified by query
exports.bat_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await bat.findById( req.query.id)
    res.render('batdetail',
    { title: 'Bat Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    // Handle building the view for creating a bat.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bat_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('batcreate', { title: 'Bat Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };