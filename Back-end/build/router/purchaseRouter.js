"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseRouter = void 0;
const PurchaseController_1 = require("./../controller/PurchaseController");
const express_1 = __importDefault(require("express"));
exports.purchaseRouter = express_1.default.Router();
const purchaseController = new PurchaseController_1.PurchaseController();
exports.purchaseRouter.post('/purchase/:clientId/:productId/:carId/:accountId', purchaseController.purchase);
exports.purchaseRouter.get('/purchase/:clientId', purchaseController.purchaseByClient);
exports.purchaseRouter.get('/infopurchase/:idPurchase', purchaseController.getInfoPurchase);
