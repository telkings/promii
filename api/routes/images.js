const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
//const { checkAuth } = require("../middlewares/authentication.js");
var mongoose = require('mongoose');

//models import
import Imagen from "../models/image.js";



//CREA UNA IMAGEN
router.post('/upload-files', async (req, res) => {

    try {
        //desectructuro nombre y descripcion del producto
        const {name, description, price } = req.body;
        //muestro por consola
        console.log("Nombre del producto => "+ name)
        console.log("Descripcion  => "+ description)
        console.log("Precio es  => "+ price)
        console.log(req.files)
        //console.log("Imagen aqui =>"+ JSON.stringify(req.files))
    
  
        const response = {
            status: "success",
        }
  
        return res.status(200).json(response);
  
    } catch (error) {
  
        console.log(error);
  
        const response = {
            status: "error",
            error: error
        }
  
        return res.status(500).json(response);
  
    }
  
  });


module.exports = router;