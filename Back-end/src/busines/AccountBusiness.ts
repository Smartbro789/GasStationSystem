import { AccountsDatabase } from "../database/AccountsDatabase";

export class AccountBusiness{
    accountDatabase = new AccountsDatabase()
    getAccount = async (idClient:any)=>{
        try {
            const result = await this.accountDatabase.getAccount(idClient)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}