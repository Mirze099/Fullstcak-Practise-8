import mongoose from "mongoose";

let ProductSchema = new mongoose.Schema({
  img: String,
  name: String,
  desc: String,
});

export let ProductModel = mongoose.model("product", ProductSchema);
