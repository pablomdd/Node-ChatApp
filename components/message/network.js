const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router(); 

router.get('/', function(req,res){
    console.log(req.headers);
    res.header({
        "just-another-header": "Mensaje personalizado"
    })
    response.success(req, res, "Lista de Mensajes",201);
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