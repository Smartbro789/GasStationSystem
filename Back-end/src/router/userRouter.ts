import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter =  express.Router()
const userController = new UserController()

userRouter.post('/create', userController.signup)
userRouter.post('/login', userController.login)
userRouter.get('/myprofile', userController.getProfile)
userRouter.get('/profile/:idClient', userController.getUserById)
userRouter.patch('/changePass/:idClient', userController.changePassword)
userRouter.patch('/changeLimit/:idClient', userController.changeLimit)
userRouter.delete('/delete/:idClient', userController.removeClient)