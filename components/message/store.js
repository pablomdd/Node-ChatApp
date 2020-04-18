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
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser){
    let filter = {}
    if(filterUser !== null){
        filter = { user: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id,
    });

    foundMessage.message = message;
    const newMessage = foundMessage.save();

    return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add : addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}
