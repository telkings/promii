import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    //storeId: { type: String, required: [true] },
    name: { type: String, required: [true] },
    categoryId: { type: String, required: [true] },
    shortDescription: { type: String, required: [true] },
    img: { type: String, required: [true] },
    public_id: { type: String, required: [true] },
    price: { type: Number, required: [true] },
    priceDiscount: { type: Number},//Precio con descuento opcional
    stock: { type: Number},//Stock de producto opcional
    active: { type: Boolean, required: [true], default: false },
    time: {
      type: Number,
      default: Date.now
    }
    //longDescription: { type: String },
    //nutritional: { type: String },
    //keywords: { type: String, required : [true] },
    //internalCode: { type: String},  
    //preparationTime: { type: Number, required: [true], default: 0 },
    //promo:  { type: Boolean, required: [true], default: false },
    //options: { type: Array, required : [true], default: void 0 },    
});


// convert to model
const Product = mongoose.model('Product', productSchema);

export default Product;

