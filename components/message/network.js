const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router(); 

router.get('/', function(req,res){
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch( e => {
            response.error(req, res, 'Error Inesperado', 500, e)
        });
});

router.post('/', function(req,res){
    controller.addMessage(req.body.user, req.body.message)
    .then( (fullMessage) => {
        response.success(req, res, fullMessage,201);
    })
    .catch( (e) => {
        response.error(req, res, "Informacion Invalida", 400, "Error en el controlador");
    });
});

router.delete('/', function(req,res){
    console.log(req.body);
    res.send('Mensaje: ' + req.body.text + ' añadido')
});

module.exports = router;