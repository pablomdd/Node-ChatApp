const db = require('mongoose');

db.Promise = global.Promise;
// 'mongodb+srv://user:user1234@cluster0-mekh6.mongodb.net/test' 
async function connect(url){
    // Le decimos a Mongoose que utilice la Clase Promise de Node
    // para cuando vaya a utilizar cualquier promesa. 
    // Esto hace la implementacion de manera nativa

    await db.connect(url , {
        useNewUrlParser: true,
    });
    console.log('[db] Conectado con exito');
}

module.exports = connect;
