"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controller/UserController");
exports.userRouter = express_1.default.Router();
const userController = new UserController_1.UserController();
exports.userRouter.post('/create', userController.signup);
exports.userRouter.post('/login', userController.login);
exports.userRouter.get('/myprofile', userController.getProfile);
exports.userRouter.get('/profile/:idClient', userController.getUserById);
exports.userRouter.patch('/changePass/:idClient', userController.changePassword);
exports.userRouter.patch('/changeLimit/:idClient', userController.changeLimit);
exports.userRouter.delete('/delete/:idClient', userController.removeClient);
