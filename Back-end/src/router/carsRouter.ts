import express from 'express'
import { CarsController } from '../controller/CarsController'

export const carsRouter = express.Router()
const carsController = new CarsController()

carsRouter.get('/mycars/:idClient', carsController.myCars)
carsRouter.post('/addCar/:idClient', carsController.addCar)
carsRouter.delete('/remove/:idCar', carsController.removeCar)
carsRouter.get('/infoCar/:idCar', carsController.getInfoCar)