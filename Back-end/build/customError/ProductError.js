"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNotFound = void 0;
const CustomError_1 = require("./CustomError");
class ProductNotFound extends CustomError_1.CustomError {
    constructor() {
        super(404, 'Товар не знайдено.');
    }
}
exports.ProductNotFound = ProductNotFound;
