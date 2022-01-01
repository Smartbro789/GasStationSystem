import { userLoginDTO } from './../model/Clients';
import { Request, Response } from "express";
import { UserBusiness } from "../busines/UserBusiness";
import { newUserDTO } from "../model/Clients";

export class UserController{
    userBusiness = new UserBusiness()

    signup = async (req:Request, res:Response) =>{
        try {
            const {nameClient, cpf, password, email} = req.body

            const newUser:newUserDTO = {
                nameClient,
                cpf,
                password,
                email
            }

            await this.userBusiness.signup(newUser)
            res.status(201).send({message:"Cliente cadastrado com sucesso..."})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    login = async(req:Request, res:Response) =>{
        try {
            const {cpf, password } = req.body
            const userLogin:userLoginDTO = {
                cpf, 
                password
            } 
            await this.userBusiness.login(userLogin)
            res.status(200).send({message: "Usuario logado com sucesso."})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}