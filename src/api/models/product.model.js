const mongoose = require("mongoose");

const ProductShema = new mongoose.Shema(
  {
    name: { type: String, trim: true, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    description: { tyoe: String, required: false },
    type: { type: String, enum: ["videogame", "laptop", "phone"] },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductShema);
