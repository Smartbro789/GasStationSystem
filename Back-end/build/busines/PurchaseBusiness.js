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
exports.PurchaseBusiness = void 0;
const PurchaseDatabase_1 = require("./../database/PurchaseDatabase");
const ProductDatabase_1 = require("./../database/ProductDatabase");
const UserDatabase_1 = require("./../database/UserDatabase");
const purchaseError_1 = require("../customError/purchaseError");
const Errors_1 = require("../customError/Errors");
const ProductError_1 = require("../customError/ProductError");
const IdGenerator_1 = require("../services/IdGenerator");
class PurchaseBusiness {
    constructor() {
        this.purchaseDatabase = new PurchaseDatabase_1.PurchaseDatabase();
        this.productDatabase = new ProductDatabase_1.ProductsDatabase();
        this.userDatabase = new UserDatabase_1.UserDatabase();
        this.purchase = (purchase) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { quantity, clientId, productId } = purchase;
                if (quantity === 0)
                    throw new purchaseError_1.QtdNotInformed;
                if (isNaN(quantity))
                    throw new Error("Somente será aceitos numeros..");
                const verifyClient = yield this.userDatabase.userById(clientId);
                if (verifyClient.length === 0)
                    throw new Errors_1.UserNotFound;
                const verifyProduct = yield this.userDatabase.userById(productId);
                if (verifyProduct.length === 0)
                    throw new ProductError_1.ProductNotFound;
                const id = IdGenerator_1.GenerateId.newID();
                const newPurchase = {
                    id,
                    quantity,
                    clientId,
                    productId,
                };
                yield this.purchaseDatabase.purchase(newPurchase);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.PurchaseBusiness = PurchaseBusiness;
