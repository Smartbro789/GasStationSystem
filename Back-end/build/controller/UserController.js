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
                const token = yield this.userBusiness.signup(newUser);
                res.status(201).send({ message: "Клієнт успішно зареєстрований", token });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const cpf = req.body.cpf;
                const password = req.body.password;
                const userLogin = {
                    cpf,
                    password
                };
                const token = yield this.userBusiness.login(userLogin);
                res.status(200).send({ message: "Користувач успішно ввійшов.", token });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.getProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const authToken = req.headers.authorization;
                const token = yield this.userBusiness.getProfile(authToken);
                res.status(200).send(token);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const idClient = req.params.idClient;
                const result = yield this.userBusiness.getUserById(idClient);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.removeClient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const idClient = req.params.idClient;
                yield this.userBusiness.removeClient(idClient);
                res.status(200).send({ message: 'Ваш обліковий запис успішно видалено' });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.changePassword = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newPass = req.body.newPass;
                const idClient = req.params.idClient;
                const user = {
                    newPass,
                    idClient
                };
                yield this.userBusiness.changePassword(user);
                res.status(200).send({ message: 'Ваш пароль успішно змінено' });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.changeLimit = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newLimit = req.body.newLimit;
                const idClient = req.params.idClient;
                const user = {
                    newLimit,
                    idClient
                };
                console.log(user);
                yield this.userBusiness.changePassword(user);
                res.status(200).send({ message: 'Ваш ліміт успішно змінено' });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.UserController = UserController;
