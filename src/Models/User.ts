import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: Number },
});
