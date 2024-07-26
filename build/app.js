"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const express = require("express");
const mongoose = require("mongoose");
const app = (0, express_1.default)();
mongoose.connect("mongodb://127.0.0.1:27017/DB");
const port = 3000;
app.get("/getUsers", (req, res) => { });
app.listen(port, () => {
    console.log(`listening on port typescript server${3000}`);
});
