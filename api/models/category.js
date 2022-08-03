import mongoose from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    //storeId: { type: String, required: [true] },
    // name: { type: String, required: [true] },
    url: { type: String, required: [true], unique: true },
    image: { type: String, required: [true] },
    public_id:{ type: String, required: [true] },
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