const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObrasSchema = new Schema({
    obra_id:{type: String, required: true, max:60},
    titulo:{type: String, required: true, max:90},
    autor:{type: String, required: true, max:70},
    dimension:{type: String, required: true, max:200},
    tecnica:{type: String, required: false, max:800},
    anio:{type: Number, required: false, max:3000},
    descripcion:{type: String, required: true, max:1000}
});

module.exports = mongoose.model("obras", ObrasSchema);
