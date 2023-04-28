const mongoose = require("mongoose")
const batSchema = mongoose.Schema({
bat_type: String,
bat_size: {type: Number, min:3},
bat_cost: {type: Number, maxLength:15}
})
module.exports = mongoose.model("Bat",batSchema)