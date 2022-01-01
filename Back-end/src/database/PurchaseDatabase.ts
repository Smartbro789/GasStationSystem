import { Purchase } from "../model/PurchaseModel";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase{
    TABLE_NAME = 'GS_Purchase';

    purchase = async (purchase:Purchase)=>{
        try {

            const { id, quantity, clientId, productId} = purchase

            await PurchaseDatabase.connection(this.TABLE_NAME)
                .insert(
                    {
                        id,
                        quantity,
                        fk_client: clientId,
                        fk_product: productId
                    }
                )
          
        } catch (error:any) {
            
        }
    }

}