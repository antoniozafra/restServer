const {response, request} = require('express');



const usuariosGet = (req, res = response) => {

    const {q,parse = 'No parse', nombre = 'No Name', apiKey, page, limit} = req.query;

    res.json({
        msg: 'getApi - Controlador',
        q,
        parse,
        nombre,
        apiKey,
        page, 
        limit
    });
};

const usuariosPost =  (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'postApi - Controllador',
        nombre,
        edad
    });

};

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: ' putApi - Controlador',
        id
    })
};

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patchApi - Controlador'
    });
};

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'deleteApi - Controlador'
    })
}


 



//EXPORTACIONES DE LAS RUTAS
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}