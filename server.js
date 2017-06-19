'use strict';

const express = require("express");
const app = express();
app.use(express.static(__dirname+ "/public")); //se especifica donde estan los archivos
app.listen(3000, function(){
    console.log("Servidor encendido en el puerto 3000");
});//