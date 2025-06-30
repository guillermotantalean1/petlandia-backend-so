const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
        date: { type: Date, default: Date.now },
        status: { type: String, enum: ['pendiente', 'enviado', 'entregado'], default: 'pendiente' },
        total: { type: Number, required: true },
        donation: { type: Number, default: 0 },
        products: [
            {
                product_id: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
                quantity: { type: Number, required: true }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const OrderModel = mongoose.model("orders", orderSchema);
module.exports = OrderModel;