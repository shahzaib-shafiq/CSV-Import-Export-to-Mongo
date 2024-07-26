"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3000;
// const productSchema = new mongoose.Schema({
//   prodId: { type: Number },
//   price: { type: Number },
//   qty: { type: Number },
// });
// const productModel = mongoose.model("Product", productSchema);
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb://127.0.0.1:27017/DB");
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1); // Exit process with failure
    }
});
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
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectToDatabase();
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
startServer();
