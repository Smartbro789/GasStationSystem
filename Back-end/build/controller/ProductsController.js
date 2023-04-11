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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const ProductsBusiness_1 = require("../busines/ProductsBusiness");
class ProductsController {
    constructor() {
        this.productsBusiness = new ProductsBusiness_1.ProductsBusiness();
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const nameProduct = req.body.nameProduct;
                const category = req.body.category;
                const newProduct = {
                    nameProduct: nameProduct,
                    category: category
                };
                //  await this.productsBusiness.createProduct(newProduct)
                res.status(201).send(newProduct);
                //  res.status(201).send({message:"Produto adicionado para venda."})
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.getProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.productsBusiness.getProducts();
                res.status(400).send({ message: "Nossos Produtos", result });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.ProductsController = ProductsController;
