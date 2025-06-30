const mongoose = require("mongoose");

const associationSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        ciudad: { type: String },
        description: { type: String },
        web: { type: String }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const AssociationModel = mongoose.model("associations", associationSchema);
module.exports = AssociationModel;