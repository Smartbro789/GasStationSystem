import { Purchase } from "../model/PurchaseModel";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase{
    TABLE_NAME = 'GS_Purchase';

    purchase = async (purchase:Purchase)=>{
        try {

            const { id, litros, value, clientId, productId, carId, date} = purchase
                await PurchaseDatabase.connection(this.TABLE_NAME)
                .insert(
                    {
                        idPurchase: id,
                        value,
                        litros,
                        fk_client: clientId,
                        fk_product: productId,
                        fk_car: carId,
                        date
                    }
                )
        } catch (error:any) {
            
        }
    }

    purchaseByClient = async (clientId:string)=>{
        try {

            const result = await PurchaseDatabase.connection(this.TABLE_NAME)
                .select()
                .join("GS_Clients","GS_Purchase.fk_client","=","GS_Clients.id")
                .join("GS_Products","GS_Purchase.fk_product","=","GS_Products.idProduct")
                .join("GS_Cars","GS_Purchase.fk_car","=","GS_Cars.idCar")
                .where({ fk_client: clientId })
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getInfoPurchase = async(idPurchase:string)=>{
        try {
            const result = await PurchaseDatabase.connection(this.TABLE_NAME)
                .select()
                .join("GS_Products","GS_Purchase.fk_product","=","GS_Products.idProduct")
                .join("GS_Cars","GS_Purchase.fk_car","=","GS_Cars.idCar")
                .where({
                    idPurchase
                })
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}