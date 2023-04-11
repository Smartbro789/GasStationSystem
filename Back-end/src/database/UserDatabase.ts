import { AuthenticationData } from "../model/Authenticator"
import { newUser, newUserDatabase } from "../model/Clients"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase{
    TABLE_NAME = 'GS_Clients'
    signup = async (user:newUser)=>{
        try {
            const {id, nameClient, cpf,password, email} = user

            const newUser:newUserDatabase = {
                id,
                nameClient,
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

    userById = async(idClient:string)=>{
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                .select()
                .where({id:idClient})
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

    getProfile = async (token:AuthenticationData)=>{
        try {
          const result = await UserDatabase.connection(this.TABLE_NAME)
            .select()
            .where({id: token.id})
            return result       
        } catch (error:any) {
            throw new Error(error.message);
        }
      }

    removeClient = async(idClient:string)=>{
        try {
            await UserDatabase.connection(this.TABLE_NAME)
            .delete()
            .where({id:idClient})
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
    
    changePassword = async(newPassword:any)=>{
        try {
            const {newPass, idClient} = newPassword
            await UserDatabase.connection(this.TABLE_NAME)
            .update({
                password: newPass
            })
            .where({id:idClient})
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }  

    changeLimit = async(user:any)=>{
        try {
            const {newLimit, idClient} = user
            await UserDatabase.connection(this.TABLE_NAME)
            .update({
                credit_limit: newLimit
            })
            .where({id:idClient})
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }  
   
}