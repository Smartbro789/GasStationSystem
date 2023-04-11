import { BaseDatabase } from "./BaseDatabase";

export class CarsDatabase extends BaseDatabase {
    TABLE_NAME = 'GS_Cars'
    myCars = async (idClient:string)=>{
        try {
            const result = await CarsDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {
                        client_id: idClient
                    }
                )
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    addCar = async (car:any)=>{
        try {

            await CarsDatabase.connection(this.TABLE_NAME)
                .insert(car) 
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    removeCar = async (idCar:string)=>{
        try {
            await CarsDatabase.connection(this.TABLE_NAME)
                .delete()
                .where(
                    {
                        idCar
                    }
                )    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getInfoCar = async (idCar:string)=>{
        try {
            const result = await CarsDatabase.connection(this.TABLE_NAME)
                .select()
                .where(
                    {
                        idCar
                    }
                )   
            return result     
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}