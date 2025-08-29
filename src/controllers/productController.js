const Product = require('../models/Product');
const { notifyAdmins } = require('../services/notificationService');

exports.updateProduct = async (req, res) => {
    try {
        // 1. Busca y actualiza el producto en la base de datos
        const { sku } = req.params;
        const updatedProduct = await Product.findOneAndUpdate({ sku }, req.body, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }

        // 2. Llama al servicio de notificaciones para que suene la alarma
        // req.user viene del token de seguridad del administrador.
        await notifyAdmins(updatedProduct, req.user);

        // 3. Envía la respuesta de éxito
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ msg: 'Error al actualizar el producto' });
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ sku: req.params.sku });
        if (!product) return res.status(404).json({ msg: 'Producto no encontrado' });

        // Aumenta el contador de vistas para el informe
        product.views += 1;
        await product.save();

        res.json(product);
    } catch (err) {
        res.status(500).json({ msg: 'Error del servidor' });
    }
};