import { NewProductData } from './../model/Products';
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {
    TABLE_NAME = "GS_Products"
    createProduct = async (product:any)=>{
        try {
            const {id, nameProduct, category} = product

            const newProduct:NewProductData = {
                id,
                name_product: nameProduct,
                category
            }

            // await ProductsDatabase.connection(this.TABLE_NAME)
            //     .insert(newProduct)

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getProducts = async ()=>{
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
                .select()

            return result

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    productById = async(idProduct:string)=>{
        try {
            const result = await ProductsDatabase.connection(this.TABLE_NAME)
                .select()
                .where({idProduct})
            return result    
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
}