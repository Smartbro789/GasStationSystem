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
exports.PurchaseDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class PurchaseDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'GS_Purchase';
        this.purchase = (purchase) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, litros, value, clientId, productId, carId, date } = purchase;
                yield PurchaseDatabase.connection(this.TABLE_NAME)
                    .insert({
                    idPurchase: id,
                    value,
                    litros,
                    fk_client: clientId,
                    fk_product: productId,
                    fk_car: carId,
                    date
                });
            }
            catch (error) {
            }
        });
        this.purchaseByClient = (clientId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield PurchaseDatabase.connection(this.TABLE_NAME)
                    .select()
                    .join("GS_Clients", "GS_Purchase.fk_client", "=", "GS_Clients.id")
                    .join("GS_Products", "GS_Purchase.fk_product", "=", "GS_Products.idProduct")
                    .join("GS_Cars", "GS_Purchase.fk_car", "=", "GS_Cars.idCar")
                    .where({ fk_client: clientId });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getInfoPurchase = (idPurchase) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield PurchaseDatabase.connection(this.TABLE_NAME)
                    .select()
                    .join("GS_Products", "GS_Purchase.fk_product", "=", "GS_Products.idProduct")
                    .join("GS_Cars", "GS_Purchase.fk_car", "=", "GS_Cars.idCar")
                    .where({
                    idPurchase
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.PurchaseDatabase = PurchaseDatabase;
