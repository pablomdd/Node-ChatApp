const db = require('mongoose');
const Model =  require('./model');

// Le decimos a Mongoose que utilice la Clase Promise de Node
// para cuando vaya a utilizar cualquier promesa. 
// Esto hace la implementacion de manera nativa
db.Promise = global.Promise;
db.connect('mongodb+srv://user:user1234@cluster0-mekh6.mongodb.net/test', {
    useNewUrlParser: true,
});
console.log('[db] Conectado con exito');

const list = [];

function addMessage(message){
    // list.push(mesage);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(){
    // return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add : addMessage,
    list: getMessages,
    //get
    //update
    //delete
}
