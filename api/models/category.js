import mongoose from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    //storeId: { type: String, required: [true] },
    name: { type: String, required: [true] },
    image: { type: String, default: "https://www.iconfinder.com/icons/2393256/grocery_items_list_shop_shopping_store_icon" },
    url: { type: String, required: [true], unique: true },
    active: { type: Boolean, default: false },
    time: {
      type: Number,
      default: Date.now
    }
});

//Validator
categorySchema.plugin(uniqueValidator, { message: 'Error, la url ya existe.' });


// convert to model
const Category = mongoose.model('Category', categorySchema);

export default Category;