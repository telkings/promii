const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
//const { checkAuth } = require("../middlewares/authentication.js");
var mongoose = require('mongoose');

//models import
import Category from "../models/category.js";

//OBTIENE CATEGORIAS
router.get('/categories', async (req, res) => {

  try {
      //const userId = req.userData._id;
      //const storeId = req.userData.storeId;
      //var categories = await Category.find({ storeId: storeId });//obtiene una categoria filtrando el storeId

      var categories = await Category.find();//Trae todas las categorias

      return res.json(categories)

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
router.post('/categories', async (req, res) => {

  try {
     // const userId = req.userData._id;
     // const storeId = req.userData.storeId;
     // category.storeId = storeId;

      var category = req.body;//creo una categoria con lo que viene por body

      const createdCategory = await Category.create(category);

      return res.json(createdCategory)

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