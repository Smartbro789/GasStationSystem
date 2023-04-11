import express from 'express'
import { ProductsController } from '../controller/ProductsController'

export const productsRouter =  express.Router()
const productsController = new ProductsController()

productsRouter.get('/getAll', productsController.getProducts)
productsRouter.post('/create', productsController.createProduct)
productsRouter.get('/:idProduct', productsController.getProductById)
