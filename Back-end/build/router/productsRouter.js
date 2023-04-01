"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = __importDefault(require("express"));
const ProductsController_1 = require("../controller/ProductsController");
exports.productsRouter = express_1.default.Router();
const productsController = new ProductsController_1.ProductsController();
exports.productsRouter.get('/getAll', productsController.getProducts);
exports.productsRouter.post('/create', productsController.createProduct);
