import { newUser, newUserDatabase } from "../model/Clients"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase{
    TABLE_NAME = 'GS_Clients'
    signup = async (user:newUser)=>{
        try {
            const {id, nameClient, cpf,password, email} = user

            const newUser:newUserDatabase = {
                id,
                name_client: nameClient,
                cpf,
                password,
                email
            }
            await UserDatabase.connection(this.TABLE_NAME)
                .insert(newUser)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    userById = async(id:string)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .where({id})
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    userByCPF = async(cpf:string)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .where({cpf})
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    userByEmail = async(email:string)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .where({email})
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}