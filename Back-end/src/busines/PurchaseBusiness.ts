import { PurchaseDatabase } from './../database/PurchaseDatabase';
import { ProductsDatabase } from './../database/ProductDatabase';
import { UserDatabase } from './../database/UserDatabase';
import { QtdNotInformed } from '../customError/purchaseError';
import { UserNotFound } from '../customError/Errors';
import { ProductNotFound } from '../customError/ProductError';
import { GenerateId } from '../services/IdGenerator';
import { Purchase, PurchaseDTO } from '../model/PurchaseModel';
export class PurchaseBusiness{

    purchaseDatabase = new PurchaseDatabase();
    productDatabase = new ProductsDatabase();
    userDatabase = new UserDatabase()

    purchase = async (purchase:PurchaseDTO)=>{
        try {
            const {quantity, clientId, productId} = purchase

            if(quantity === 0) throw new QtdNotInformed
            if(isNaN(quantity)) throw new Error("Somente será aceitos numeros..");
            

            const verifyClient = await this.userDatabase.userById(clientId)
            if(verifyClient.length === 0) throw new UserNotFound

            const verifyProduct = await this.userDatabase.userById(productId)
            if(verifyProduct.length === 0) throw new ProductNotFound;

            const id = GenerateId.newID()

            const newPurchase:Purchase = {
                id,
                quantity,
                clientId,
                productId,
            }
            
            await this.purchaseDatabase.purchase(newPurchase)
            
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}