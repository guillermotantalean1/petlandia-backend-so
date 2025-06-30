const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
    {
        order_id: { type: mongoose.Schema.Types.ObjectId, ref: "orders", required: true },
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
        association_id: { type: mongoose.Schema.Types.ObjectId, ref: "associations", required: true },
        amount: { type: Number, required: true },
        date: { type: Date, default: Date.now }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const DonationModel = mongoose.model("donations", donationSchema);
module.exports = DonationModel;