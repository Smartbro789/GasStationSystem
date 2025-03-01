import { userLoginDTO } from './../model/Clients';
import { UserBusiness } from "../busines/UserBusiness";
import { newUserDTO } from "../model/Clients";
import { Request, Response } from 'express';

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

            const token = await this.userBusiness.signup(newUser)
            res.status(201).send({message:"Клієнт успішно зареєстрований", token})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    login = async(req:Request, res:Response) =>{
        try {
            const cpf = req.body.cpf
            const password = req.body.password

            const userLogin:userLoginDTO = {
                cpf, 
                password
            } 
             const token = await this.userBusiness.login(userLogin)
            
            res.status(200).send({message: "Користувач успішно ввійшов.", token})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getProfile = async (req:Request, res:Response)=>{
        try {
            const authToken = req.headers.authorization as string

            const token = await this.userBusiness.getProfile(authToken)
            res.status(200).send(token);
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    getUserById = async(req:Request, res:Response)=>{
        try {
            const idClient = req.params.idClient
            const result = await this.userBusiness.getUserById(idClient)
            res.status(200).send(result);
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    removeClient = async(req:Request, res:Response)=>{
        try {
            const idClient = req.params.idClient

            await this.userBusiness.removeClient(idClient)
            res.status(200).send({message:'Ваш обліковий запис успішно видалено'});

        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    changePassword = async(req:Request, res:Response)=>{
        try {
            const newPass = req.body.newPass
            const idClient = req.params.idClient
    
             const user:any = {
                    newPass,
                    idClient
                }
             await this.userBusiness.changePassword(user)
             res.status(200).send({message:'Ваш пароль успішно змінено'});
                
         } catch (error:any) {
              res.status(400).send(error.message);
         }
    }  

    changeLimit = async(req:Request, res:Response)=>{
        try {
            const newLimit = req.body.newLimit
            const idClient = req.params.idClient
    
             const user:any = {
                    newLimit,
                    idClient
                }
                console.log(user);
                
             await this.userBusiness.changePassword(user)
             res.status(200).send({message:'Ваш ліміт успішно змінено'});
                
         } catch (error:any) {
              res.status(400).send(error.message);
         }
    }  

}