const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await
mongoose.connect('mongodb://localhost:27017/zebrands_db');
        console.log('Conexion a MongoDB exitosa.');        
    } catch (err) {
         console.error(err.message);
         process.exit(1);
    }
};

module.exports = connectDB;