const mongoose = require("mongoose"); //Aqui le estoy diciendo qu lo que voy a trabajar ahorita requiere mongoose

const Schema = mongoose.Schema; //Le digo que voy a requerir un espacio a partir de mongoose y que voy a requerir un esquema
const EmpleadosSchema = new Schema({
    nombre:{type: String, requiered: true, max:60},
    apellido_p:{type: String, requiered: true, max:40},
    apellido_m:{type: String, requiered: true, max:40},
    telefono:{type: String, requiered: true, max:15},
    mail:{type: String, requiered: false, max:70},
    direccion:{type: String, requiered: false, max:150}    
});

module.exports = mongoose.model("empleados", EmpleadosSchema);