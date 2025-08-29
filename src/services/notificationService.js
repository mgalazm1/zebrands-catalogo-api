const User = require('../models/User');

const notifyAdmins = async (product, adminWhoMadeChange) => {
    // 1. Encuentra a todos los administradores
    const otherAdmins = await User.find({ role: 'admin', _id: { $ne: adminWhoMadeChange._id } });

    // 2. Simula el envío de correos
    console.log(`Notificando a los ${otherAdmins.length} administradores sobre el cambio en el producto "${product.name}"`);

    for (const admin of otherAdmins) {
        // En un proyecto real, aquí se usaría una herramienta para enviar un correo de verdad.
        console.log(`- Correo enviado (simulado) a: ${admin.username}`);
    }
};

module.exports = { notifyAdmins };