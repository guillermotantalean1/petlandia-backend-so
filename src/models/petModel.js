const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
        name: { type: String, required: true },
        type: { type: String, enum: ['perro', 'gato', 'otro'], required: true },
        race: { type: String },
        age: { type: Number },
        allergies: { type: String }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const PetModel = mongoose.model("pets", petSchema);
module.exports = PetModel;