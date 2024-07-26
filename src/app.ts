import express from "express";
import mongoose from "mongoose";
import { Request } from "express";

import multer, { FileFilterCallback } from "multer";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// const productSchema = new mongoose.Schema({
//   prodId: { type: Number },
//   price: { type: Number },
//   qty: { type: Number },
// });

// const productModel = mongoose.model("Product", productSchema);

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/DB");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit process with failure
  }
};

// app.get("/getUsers", async (req, res) => {
//   try {
//     await productModel.create({ prodId: 1, price: 1, qty: 1 });
//     const data = await productModel.find({});
//     console.log(data);
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching data", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Start the server after successful database connection

const startServer = async () => {
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer();

var userRoute = require("./Routes/userRoute");

app.use("/", userRoute);
module.exports = app;
