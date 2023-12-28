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
exports.PurchaseController = void 0;
const PurchaseBusiness_1 = require("../busines/PurchaseBusiness");
class PurchaseController {
    constructor() {
        this.purchaseBusiness = new PurchaseBusiness_1.PurchaseBusiness();
        this.purchase = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const value = req.body.value;
                const litros = req.body.litros;
                const clientId = req.params.clientId;
                const productId = req.params.productId;
                const carId = req.params.carId;
                const accountId = req.params.accountId;
                const newPurchase = {
                    value,
                    clientId,
                    productId,
                    carId,
                    litros
                };
                yield this.purchaseBusiness.purchase(newPurchase);
                res.status(200).send({ message: "Покупку здійснено успішно." });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.purchaseByClient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { clientId } = req.params;
                const result = yield this.purchaseBusiness.purchaseByClient(clientId);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.getInfoPurchase = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const idPurchase = req.params.idPurchase;
                const result = yield this.purchaseBusiness.getInfoPurchase(idPurchase);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.PurchaseController = PurchaseController;
