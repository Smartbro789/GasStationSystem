import { CarsDatabase } from "../database/CarsDatabase";
import { GenerateId } from "../services/IdGenerator";

export class CarsBusiness{

    carsDatabase = new CarsDatabase()

    myCars = async (idClient:any)=>{
        try {
            const result = await this.carsDatabase.myCars(idClient)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    addCar = async (car:any)=>{
        try {

            const {carName, plate, idClient} = car
            if(!carName || !plate ) throw new Error("Необхідно заповнити всі поля")

            const idCar = GenerateId.newID()
            
            const newCar = {
                idCar,
                carName,
                plate,
                client_id: idClient
            }

            await this.carsDatabase.addCar(newCar)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeCar = async (idCar:any)=>{
        try {
           await this.carsDatabase.removeCar(idCar)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getInfoCar = async (idCar:any)=>{
        try {
          const result = await this.carsDatabase.getInfoCar(idCar)
          return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}