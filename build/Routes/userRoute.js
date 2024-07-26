"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.resolve(__dirname, "public")));
var storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./Public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
var upload = (0, multer_1.default)({ storage: storage });
const userController = require("../Controller/userCotroller");
app.post("/importUser", upload.single("file"), userController.importUser);
module.exports = app;
