import { Request, Response } from "express";
import { CarsBusiness } from "../busines/CarsBusiness";
export class CarsController{

    carsBusiness = new CarsBusiness()
    
    myCars = async (req:Request, res:Response)=>{
        try {
            const {idClient} = req.params
            const result = await this.carsBusiness.myCars(idClient)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    addCar = async (req:Request, res:Response)=>{
        try {

            const {carName ,plate} = req.body
            const {idClient} = req.params

            const newCar = {
                carName,
                plate,
                idClient
            }
           
            await this.carsBusiness.addCar(newCar)
            res.status(200).send({message:'Автомобіль успішно зареєстрований'})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    removeCar = async (req:Request, res:Response)=>{
        try {
            const {idCar} = req.params
            await this.carsBusiness.removeCar(idCar)
            res.status(200).send({message:'Автомобіль успішно вилучено'})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getInfoCar = async (req:Request, res:Response)=>{
        try {
            const {idCar} = req.params
           const result =  await this.carsBusiness.getInfoCar(idCar)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

}