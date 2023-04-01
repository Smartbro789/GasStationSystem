import { Request, Response } from 'express';
import { PurchaseBusiness } from '../busines/PurchaseBusiness';
import { PurchaseDTO } from '../model/PurchaseModel';

export class PurchaseController{
    purchaseBusiness = new PurchaseBusiness()

    purchase = async (req:Request, res:Response)=>{
        try {

            const quantity = req.body.quantity
            const clientId = req.params.clientId
            const productId = req.params.productId

            const newPurchase: PurchaseDTO = {
                quantity,
                clientId,
                productId,
            }

            await this.purchaseBusiness.purchase(newPurchase)
            res.status(200).send({message:"Compra realizada com sucesso."})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}