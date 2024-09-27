import { PurchaseDatabase } from './../database/PurchaseDatabase';
import { ProductsDatabase } from './../database/ProductDatabase';
import { UserDatabase } from './../database/UserDatabase';
import { QtdNotInformed } from '../customError/purchaseError';
import { UserNotFound } from '../customError/Errors';
import { ProductNotFound } from '../customError/ProductError';
import { GenerateId } from '../services/IdGenerator';
import { Purchase, PurchaseDTO } from '../model/PurchaseModel';
import { GetDate } from '../services/getDate';
export class PurchaseBusiness{

    purchaseDatabase = new PurchaseDatabase();
    productDatabase = new ProductsDatabase();
    userDatabase = new UserDatabase()

    purchase = async (purchase:PurchaseDTO)=>{
        try {
            const {carId, value, clientId, productId, litros} = purchase
            
            const verifyClient = await this.userDatabase.userById(clientId)
            if(verifyClient.length === 0) throw new UserNotFound
            
            console.log(productId);
            const verifyProduct = await this.productDatabase.productById(productId)
            if(verifyProduct.length === 0) throw new ProductNotFound;
            
            const id = GenerateId.newID()

            const date = GetDate.newDate()

            const newPurchase:Purchase = {
                id,
                value,
                carId,
                clientId,
                productId,
                litros,
                date
            }
            
            await this.purchaseDatabase.purchase(newPurchase)
            
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    purchaseByClient = async (clientId:string)=>{
        try {
            const verifyClient = await this.userDatabase.userById(clientId)
            if(verifyClient.length === 0) throw new UserNotFound

            const result = await this.purchaseDatabase.purchaseByClient(clientId)
            return result
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getInfoPurchase = async(idPurchase:string)=>{
        try {
            const result = await this.purchaseDatabase.getInfoPurchase(idPurchase)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}