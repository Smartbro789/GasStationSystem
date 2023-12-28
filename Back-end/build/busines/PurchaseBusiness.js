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
const Errors_1 = require("../customError/Errors");
const ProductError_1 = require("../customError/ProductError");
const IdGenerator_1 = require("../services/IdGenerator");
const getDate_1 = require("../services/getDate");
class PurchaseBusiness {
    constructor() {
        this.purchaseDatabase = new PurchaseDatabase_1.PurchaseDatabase();
        this.productDatabase = new ProductDatabase_1.ProductsDatabase();
        this.userDatabase = new UserDatabase_1.UserDatabase();
        this.purchase = (purchase) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { carId, value, clientId, productId, litros } = purchase;
                const verifyClient = yield this.userDatabase.userById(clientId);
                if (verifyClient.length === 0)
                    throw new Errors_1.UserNotFound;
                console.log(productId);
                const verifyProduct = yield this.productDatabase.productById(productId);
                if (verifyProduct.length === 0)
                    throw new ProductError_1.ProductNotFound;
                const id = IdGenerator_1.GenerateId.newID();
                const date = getDate_1.GetDate.newDate();
                const newPurchase = {
                    id,
                    value,
                    carId,
                    clientId,
                    productId,
                    litros,
                    date
                };
                yield this.purchaseDatabase.purchase(newPurchase);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.purchaseByClient = (clientId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const verifyClient = yield this.userDatabase.userById(clientId);
                if (verifyClient.length === 0)
                    throw new Errors_1.UserNotFound;
                const result = yield this.purchaseDatabase.purchaseByClient(clientId);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getInfoPurchase = (idPurchase) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.purchaseDatabase.getInfoPurchase(idPurchase);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.PurchaseBusiness = PurchaseBusiness;
