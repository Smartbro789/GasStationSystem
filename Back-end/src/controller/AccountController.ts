import { Request, Response } from "express";
import { AccountBusiness } from "../busines/AccountBusiness";

export class AccountController{
    accountBusiness = new AccountBusiness();
    getAccount = async (req:Request, res:Response)=>{
        try {
            const {idClient} = req.params
            const result = await this.accountBusiness.getAccount(idClient)
            res.status(200).json(result)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}