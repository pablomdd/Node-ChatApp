

const list = [];

function addMessage(mesage){
    list.push(mesage);
}

function getMessages(){
    return list;
}

module.exports = {
    add : addMessage,
    list: getMessages,
    //get
    //update
    //delete
}
