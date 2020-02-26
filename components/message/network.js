const express = require('express')
const response = require('../../network/response')
const router = express.Router();

router.get('/', function(req,res){
    console.log(req.headers);
    res.header({
        "just-another-header": "Mensaje personalizado"
    })

    response.success(req, res, "Lista de Mensajes",201);
});

router.post('/', function(req,res){

    if(req.query.error == "ok"){
        response.error(req, res, "Error inesperado", 500, "Simulacion de errores")

    }else{
        response.success(req, res, "Creado correctamente",201)
    }
    // response.success(req, res, "Creado correctamente",201)
});

router.delete('/', function(req,res){
    console.log(req.body);
    res.send('Mensaje: ' + req.body.text + ' añadido')
});

module.exports = router;