const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
//const { checkAuth } = require("../middlewares/authentication.js");
var mongoose = require('mongoose');

//models import
import Product from "../models/product.js";
import Category from "../models/category.js";
//import Option from "../models/option.js";


//POST -> req.body
//GET -> req.query

//OBTIENE PRODUCTOS


//MASTER QUERY PARA OBTENER PRODUCTOS ASOCIADOS A UNA CATEGORIA

router.get('/products', async (req, res) => {
	//Recuperamos Categorias Productos y Opciones en paraelos (sin await)
	var categories = Category.find({ url: req.query.url });
	var products = Product.find({});
	//var options = Option.find({});

	[categories, products,] = await Promise.all([categories, products]);

	//trasformamos de mongoose a json
	categories = categories.map((category) => category.toJSON());
	products = products.map((product) => product.toJSON());
	
	//opciones en productos, productos en categorias
	//recorro las categorias
	categories.forEach((category) => {
		//filtro los productos que pertenecen a esta categoria y las anido en category.products
		category.products = products.filter((product) => product.categoryId == category._id);
		// category.products.forEach((product) => {
		// 	product.options = options.filter((option) => option.productId == product._id);
		// });
	});
	res.json(categories);
});



// //OBTIENE UN PRODUCTO
router.get('/product',  async (req, res) => {

    try {
        //const storeId = req.userData.storeId;
        //const productId = req.query.productId;
       // const productId = req.query.productId;
       var productId = req.query._id
        var product = await Product.findOne({ _id: productId });

        return res.json(product)

    } catch (error) {

        console.log(error);

        const response = {
            status: "error",
            error: "Error Obteniendo el producto"
        }

        return res.status(500).json(response);

    }

});

// //CREA UN PRODUCTO
router.post('/products', async (req, res) => {

    try {
        //const storeId = req.userData.storeId;
        //product.options = []
        //product.storeId = storeId;
        //product.url = product.name.replace(/\s/g, '-').toLowerCase();
        var product = req.body;

        const createdProduct = await Product.create(product);

        return res.json(createdProduct)

    } catch (error) {

        console.log(error);

        const response = {
            status: "error",
            error: error
        }

        return res.status(500).json(response);

    }

});

// //ACTUALIZA UN PRODUCTO (desde admin)
// router.put('/products', checkAuth, async (req, res) => {

//     try {

//         const storeId = req.userData.storeId;
//         var product = req.body.product;
//         product.url = product.name.replace(/\s/g, '-').toLowerCase();

//         const updatedProduct = await Product.updateOne({_id: product._id, storeId: storeId}, product);

//         return res.json(updatedProduct)

//     } catch (error) {

//         console.log(error);

//         const response = {
//             status: "error",
//             error: "Error actualizando el producto."
//         }

//         return res.status(500).json(response);

//     }

// });

// //ACTUALIZA IMAGENES DE UN PRODUCTO (desde store en editMode)
// router.put('/images-product', checkAuth, async (req, res) => {

//     try {

//         const storeId = req.userData.storeId;
//         const productId = req.body.productId;
//         const image = req.body.image;
//         const imageKey = req.body.imageKey;

//         var productToEdit = await Product.findOne({_id: productId});

//         productToEdit = JSON.parse(JSON.stringify(productToEdit));
//         productToEdit.images[imageKey] = image;



//         const updatedProduct = await Product.updateOne({_id: productToEdit._id, storeId: storeId}, productToEdit);


//         return res.json(updatedProduct)

//     } catch (error) {

//         console.log(error);

//         const response = {
//             status: "error",
//             error: "Error actualizando el producto."
//         }

//         return res.status(500).json(response);

//     }

// });

// //ELIMINA UN PRODUCTO
// router.delete('/products', checkAuth, async (req, res) => {
   
//     try {

//         const storeId = req.userData.storeId;
//         const product = req.body.product;
        
//         await Product.deleteOne({ storeId: storeId, _id: product._id });

//         return res.json()

//     } catch (error) {

//         console.log(error);

//         const response = {
//             status: "error",
//             error: "Error eliminando producto"
//         }

//         return res.status(500).json(response);

//     }

// });


// async function putInProducts(products, categories) {//Recibe como parametro productos y categorias
//     [products, categories] = await Promise.all([products, categories])
//     //async function putInProducts(products, categories, options) {
//     //[products, categories, options] = await Promise.all([products, categories, options])

//     products = JSON.parse(JSON.stringify(products));//transforma de mongoose a JSON
//     categories = JSON.parse(JSON.stringify(categories));//transforma de mongoose a JSON
//     //options = JSON.parse(JSON.stringify(options));


//     products.forEach(function (product, index) {

//         //agregamos categorías
//         products[index].category = categories.find(function (category) { 
//             return category._id.toString() == product.categoryId;//Retorna productos de la categoria por Id
//         });
        
//         //agregamos opciones
//         // products[index].options.forEach(function (option, index2) {
//         //     products[index].options[index2] = options.find(function (o){
//         //         return o._id == products[index].options[index2]._id
//         //     })
//         // });
    
//     });

//     return products;
// }


// router.get('/products',  async (req, res) => {

//     try {

//         //console.log(req.query._id)

//         //const storeId = req.userData.storeId;
//         //var products = Product.find({ storeId: storeId });
//         //var categories = Category.find({ storeId: storeId });
//         //var options = Option.find({ storeId: storeId });
//         //var categories = Category.find({url: req.query.url});//Aqui pasamos la Url de la categoria
//         //var products = Product.find({});

//         var categoryUrl = req.query.url
        
//         var categories = await Category.find({url: categoryUrl});//Trae todas las categorias
//         var products = await Product.find();

//         //console.log(products)
//         //console.log(categories)
//         //return res.json("todo bien")
        
//         products = await putInProducts(products, categories);
//         return res.json(products)

//     } catch (error) {

//         console.log(error);

//         const response = {
//             status: "error",
//             error: "Error recuperando los productos."
//         }

//         return res.status(500).json(response);

//     }

// });


module.exports = router;