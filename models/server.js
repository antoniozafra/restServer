const express = require('express');
const cors = require('cors')



class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        
        //RUTAS DE MI APP
        this.routes();

    }

    middlewares() {

        //Ejecutamos CORS
        this.app.use(cors() );

        //LECTURA Y PARSEO DEL BODY
        this.app.use( express.json() );

        //Directorio publico
        this.app.use(express.static('public'));
    }


    routes(){
        this.app.use( this.usuariosPath, require('../routes/usuarios'))
    }


    listen() {

        //ESCUCHAMOS LAS PETICIONES EN NUESTRO SERVIDOR 
        this.app.listen(process.env.PORT, () => {
        console.log('Servidor corriendo en el puerto', this.port);

        });
    }




}


module.exports= Server;
