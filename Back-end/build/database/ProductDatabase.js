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
exports.ProductsDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ProductsDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = "GS_Products";
        this.createProduct = (product) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, nameProduct, category } = product;
                const newProduct = {
                    id,
                    name_product: nameProduct,
                    category
                };
                yield ProductsDatabase.connection(this.TABLE_NAME)
                    .insert(newProduct);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getProducts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ProductsDatabase.connection(this.TABLE_NAME)
                    .select();
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.productById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ProductsDatabase.connection(this.TABLE_NAME)
                    .select()
                    .where({ id });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.ProductsDatabase = ProductsDatabase;
