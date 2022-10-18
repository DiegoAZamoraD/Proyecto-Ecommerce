// Añadimos el mongoose a nuestro archivo cargo la dependencia para conectar el back con la base de datos
const mongoose = require("mongoose");

// Establesco la conexion
const host = "localhost";
const port = "27017";
const db = "hr";


exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}