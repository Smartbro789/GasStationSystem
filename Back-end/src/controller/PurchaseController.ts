import { Request, Response } from 'express';
import { PurchaseBusiness } from '../busines/PurchaseBusiness';
import { PurchaseDTO } from '../model/PurchaseModel';

export class PurchaseController{
    purchaseBusiness = new PurchaseBusiness()

    purchase = async (req:Request, res:Response)=>{
        try {

            const value = req.body.value
            const litros = req.body.litros
            const clientId = req.params.clientId
            const productId = req.params.productId
            const carId = req.params.carId
            const accountId = req.params.accountId

            const newPurchase: PurchaseDTO = {
                value,
                clientId,
                productId,
                carId,
                litros
            }

            await this.purchaseBusiness.purchase(newPurchase)
            res.status(200).send({message:"Покупку здійснено успішно."})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    purchaseByClient = async (req:Request, res:Response)=>{
        try {
            const {clientId} = req.params
            
            const result = await this.purchaseBusiness.purchaseByClient(clientId)
            res.status(200).send(result)
            
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    getInfoPurchase = async(req:Request, res:Response)=>{
        try {

            const idPurchase = req.params.idPurchase

            const result = await this.purchaseBusiness.getInfoPurchase(idPurchase)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}