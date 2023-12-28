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
exports.ProductsBusiness = void 0;
const ProductDatabase_1 = require("../database/ProductDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
const Errors_1 = require("../customError/Errors");
class ProductsBusiness {
    constructor() {
        this.productsDatabase = new ProductDatabase_1.ProductsDatabase();
        this.createProduct = (product) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nameProduct, category } = product;
                if (!nameProduct || !category)
                    throw new Errors_1.BodyNotIncompleted;
                const id = IdGenerator_1.GenerateId.newID();
                const newProduct = {
                    id,
                    nameProduct,
                    category
                };
                yield this.productsDatabase.createProduct(newProduct);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getProducts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.productsDatabase.getProducts();
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getProductById = (idProduct) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.productsDatabase.productById(idProduct);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.ProductsBusiness = ProductsBusiness;
