const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        categoria: { type: String },
        images: [{ type: String }]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;