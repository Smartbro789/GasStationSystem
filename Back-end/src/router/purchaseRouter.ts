import { PurchaseController } from './../controller/PurchaseController';
import express from 'express'

export const purchaseRouter = express.Router()
const purchaseController = new PurchaseController()

purchaseRouter.post('/purchase/:clientId/:productId/:carId/:accountId', purchaseController.purchase)
purchaseRouter.get('/purchase/:clientId', purchaseController.purchaseByClient)
purchaseRouter.get('/infopurchase/:idPurchase', purchaseController.getInfoPurchase)