import express from "express";

//const express = require("express");

//const mongoose = require("mongoose");

import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/DB");

const port = 3000;

const productSchema = new mongoose.Schema({
  prodId: Number,
  price: Number,
  qty: Number,
});

const productModel = mongoose.model("Data", productSchema);

app.get("/getUsers", (req, res) => {
  productModel
    .find({})
    .then(function (products) {
      res.json(products);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`listening on port typescript server${3000}`);
});
