import { userLoginDTO } from '../model/User';
import { UserBusiness } from "../business/UserBusiness";
import { newUserDTO } from "../model/User";
import { Request, Response } from 'express';
import cookie from 'cookie';
export class UserController{
    userBusiness = new UserBusiness()

    signup = async (req:Request, res:Response) =>{
        try {
            const {email, password, name,surname ,position, dob, passport, salary} = req.body

            const newUser:newUserDTO = {
                email,
                password,
                name,
                surname,
                position,
                dob,
                passport,
                salary
            }

            const token = await this.userBusiness.signup(newUser)
            res.status(201).send({message:"Клієнт успішно зареєстрований", token})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    login = async(req:Request, res:Response) =>{
        try {
            const passport = req.body.passport
            const password = req.body.password

            const userLogin:userLoginDTO = {
                passport,
                password
            } 
            const token = await this.userBusiness.login(userLogin)
            const cookieValue = cookie.serialize('session', token, {
                httpOnly: true,
                secure: true,
                maxAge: 60*60*24, // 1 day
                sameSite: 'strict',
                path: '/'
            });
            res.setHeader('Set-Cookie', cookieValue);
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
            const id = req.params.id
    
             const user:any = {
                    newPass,
                    id
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
            const id = req.params.id
    
             const user:any = {
                    newLimit,
                    id
                }
                console.log(user);
                
             await this.userBusiness.changePassword(user)
             res.status(200).send({message:'Ваш ліміт успішно змінено'});
                
         } catch (error:any) {
              res.status(400).send(error.message);
         }
    }  

}