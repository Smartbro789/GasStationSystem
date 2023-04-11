import { ProductDTO } from './../model/Products';
import { Request, Response } from 'express';
import { ProductsBusiness } from "../busines/ProductsBusiness";

export class ProductsController{
    productsBusiness = new ProductsBusiness()

    createProduct = async (req:Request, res:Response)=>{
        try {
         const {nameProduct, category} = req.body
         
         const newProduct:ProductDTO = {
            nameProduct:nameProduct,
            category:category
         }

        //  await this.productsBusiness.createProduct(newProduct)
         console.log(newProduct);
         
         res.status(201).send({message:"Produto adicionado para venda."})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    getProducts = async (req:Request, res:Response)=>{
        try {
           const result = await this.productsBusiness.getProducts()
            res.status(200).send({message:"Nossos Produtos", result});
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }

    getProductById = async (req:Request, res:Response)=>{
        try {
            const idProduct = req.params.idProduct
           const result = await this.productsBusiness.getProductById(idProduct)
            res.status(200).send(result);
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}