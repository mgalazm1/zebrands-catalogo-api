const express = require('express');
const connectDB = require('./config/db');
const productController = require('./controllers/productController');

// Conecta a la base de datos
connectDB();

const app = express();
app.use(express.json()); // Permite a la app entender JSON

// Ejemplo de ruta para actualizar un producto
// Por simplicidad, aquí la hacemos pública, pero en la prueba debe ser privada
app.put('/api/products/:sku', productController.updateProduct);

// Ejemplo de ruta para ver un producto
app.get('/api/products/:sku', productController.getProduct);

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));