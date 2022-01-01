import { ProductDTO, NewProduct } from './../model/Products';
import { ProductsDatabase } from "../database/ProductDatabase";
import { GenerateId } from "../services/IdGenerator";
import { BodyNotIncompleted } from '../customError/Errors';

export class ProductsBusiness{
    productsDatabase = new ProductsDatabase()
    
    createProduct = async (product:ProductDTO)=>{
        try {
            const { nameProduct, category } = product

            if(!nameProduct || !category) throw new BodyNotIncompleted

            const id = GenerateId.newID()

            const newProduct: NewProduct = {
                id,
                nameProduct,
                category
            }

            await this.productsDatabase.createProduct(newProduct)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getProducts = async ()=>{
        try {
           const result = await this.productsDatabase.getProducts()
           return result
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}