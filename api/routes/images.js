const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
//const { checkAuth } = require("../middlewares/authentication.js");
var mongoose = require('mongoose');
const cloudinary = require("cloudinary");

//models import
import Product from "../models/product.js";
import Category from "../models/category.js";

cloudinary.config({
                 cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                 api_key:  process.env.CLOUDINARY_API_KEY,
                 api_secret:  process.env.CLOUDINARY_API_SECRET
})

const fs = require('fs-extra');

//CREA UN PRODUCTO
router.post('/upload-product', async (req, res) => {

    try {
        //desectructuro caracteristicas del producto
        const {name, description, price, price2, stockData, category } = req.body;
        //console.log("Imagen aqui =>"+ JSON.stringify(req.files))
        const resultCloudinary = await cloudinary.v2.uploader.upload(req.files[0].path, {height: 200, width: 200, crop: "scale"})
        //console.log("resultado cloudinary "+ JSON.stringify( resultCloudinary ))
        //console.log("resultado cloudinary url "+ resultCloudinary.url )
        
       // creo un objeto para agregar los items del producto
        const newProduct = {
            name: name,
            categoryId: category,
            shortDescription: description,
            img: resultCloudinary.url,
            public_id: resultCloudinary.public_id,
            price: price,
            priceDiscount: price2,
            stock:stockData
        }

       //veo el producto que voy a crear en un string
       //console.log("creando nuevo producto =>>>  "+  JSON.stringify( newProduct))
        //guardo en un variable la respuesta a la insercion en base de datos 
       const createdProduct = await Product.create(newProduct);
       //si guardo con exito en base de datos ahora apelo a fs-extra para eliminar el archivo
       await fs.unlink(req.files[0].path)
       //respondo con el estado y el producto creado
       const response = {
            status: "success",
            // product: createdProduct
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
//ACTUALIZA UN PRODUCTO
router.put('/upload-product', async (req, res) => {

    try {
          //console.log("actualizando "+ JSON.stringify( req.body))
          //const update = req.body
          //console.log("_id prueba "+ req.body._id)
          const productId = req.body
          const { shortDescription, price, priceDiscount, stock } = req.body;
          
          const updatedProduct = await Product.updateOne({_id: productId._id}, productId)

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
//ELIMINA UN PRODUCTO 
router.post('/delete-product', async (req, res) => {

    try {
         const { idProduct, urlCloud } = req.body
         //console.log("Desde Front #idProduct => "+ idProduct )
         //console.log("Desde Front #urlCloud=> "+ urlCloud )
         //ELIMINO PRODUCTO DE BASE DE DATOS POR ID
         await Product.deleteOne({_id: idProduct})

         //eliminando imagen en cloudinary
         //ELIMINO IMAGEN DE CLOUDINARY POR PUBLIC_ID
         await cloudinary.v2.uploader.destroy(urlCloud)
         
        
         const response = {
            status: "success",
        }
  
        return res.status(200).json(response);
   
         return res.json("success")
   
     } catch (error) {
   
         console.log(error);
   
         const response = {
             status: "error",
             error: error
         }
   
         return res.status(500).json(response);
   
     }

});


//CREA UNA CATEGORIA
router.post('/upload-categories', async (req, res) => {

    try {
        //desectructuro
        const {url, image } = req.body;
        const Cloudinary = await cloudinary.v2.uploader.upload(req.files[0].path, {height: 200, width: 200, crop: "scale"})
        //console.log("resultado cloudinary "+ JSON.stringify( Cloudinary ))
       // creo un objeto para agregar los items de la categoria
        const newCategory = {
            url: url,
            image: Cloudinary.url,
            public_id: Cloudinary.public_id,
        }

       const createdCategory = await Category.create(newCategory);
       //si guardo con exito en base de datos ahora apelo a fs-extra para eliminar el archivo
       await fs.unlink(req.files[0].path)
       //respondo con el estado y la categoria creada
       const response = {
            status: "success",
            //product: createdCategory
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


   