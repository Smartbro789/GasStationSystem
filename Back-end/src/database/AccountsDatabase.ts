import { BaseDatabase } from "./BaseDatabase";

export class AccountsDatabase extends BaseDatabase{
    TABLE_NAME = "GS_Account";
    getAccount = async (idClient:string)=>{
        try {
            const result = await AccountsDatabase.connection(this.TABLE_NAME)
                .select()
                .join("GS_Clients","GS_Account.fk_client","=","GS_Clients.id")
                .where({
                    client_id: idClient
                })
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    createAccount = async ()=>{
        try {
            await AccountsDatabase.connection(this.TABLE_NAME)
              .insert({
              })
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}
