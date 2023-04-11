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
                const { id, quantity, clientId, productId } = purchase;
                yield PurchaseDatabase.connection(this.TABLE_NAME)
                    .insert({
                    id,
                    quantity,
                    fk_client: clientId,
                    fk_product: productId
                });
            }
            catch (error) {
            }
        });
    }
}
exports.PurchaseDatabase = PurchaseDatabase;
