"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserBusiness_1 = require("../busines/UserBusiness");
class UserController {
    constructor() {
        this.userBusiness = new UserBusiness_1.UserBusiness();
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nameClient, cpf, password, email } = req.body;
                const newUser = {
                    nameClient,
                    cpf,
                    password,
                    email
                };
                yield this.userBusiness.signup(newUser);
                res.status(201).send({ message: "Cliente cadastrado com sucesso..." });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cpf, password } = req.body;
                const userLogin = {
                    cpf,
                    password
                };
                yield this.userBusiness.login(userLogin);
                res.status(200).send({ message: "Usuario logado com sucesso." });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.UserController = UserController;
