import express from 'express'
import { AccountController } from '../controller/AccountController'

export const accountRouter = express.Router()
const accountController = new AccountController()

accountRouter.get('/:idClient', accountController.getAccount)