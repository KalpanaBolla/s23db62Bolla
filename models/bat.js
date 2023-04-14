const mongoose = require("mongoose")
const batSchema = mongoose.Schema({
bat_type: String,
bat_size: Number,
bat_cost: Number
})
module.exports = mongoose.model("Bat",batSchema)