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
exports.UserBusiness = void 0;
const Errors_1 = require("./../customError/Errors");
const IdGenerator_1 = require("../services/IdGenerator");
const UserDatabase_1 = require("./../database/UserDatabase");
const Errors_2 = require("../customError/Errors");
class UserBusiness {
    constructor() {
        this.userDatabase = new UserDatabase_1.UserDatabase();
        this.signup = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nameClient, cpf, password, email } = user;
                if (!nameClient || !cpf || !password || !email)
                    throw new Errors_1.BodyNotIncompleted;
                if (!email.includes('@') || !email.includes('.com'))
                    throw new Errors_1.EmailFormat;
                if (cpf.length != 11)
                    throw new Errors_1.CpfFormat;
                if (nameClient.length < 3)
                    throw new Errors_1.NameFormat;
                const verifyEmail = yield this.userDatabase.userByEmail(email);
                if (verifyEmail.length != 0)
                    throw new Errors_1.EmailAlreadyRegistered;
                const verifyCPF = yield this.userDatabase.userByCPF(cpf);
                if (verifyCPF.length != 0)
                    throw new Errors_2.CpfAlreadyRegistered;
                const id = IdGenerator_1.GenerateId.newID();
                const newUser = {
                    id,
                    nameClient,
                    cpf,
                    password,
                    email
                };
                yield this.userDatabase.signup(newUser);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.login = (userLogin) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cpf, password } = userLogin;
                if (!cpf || !password)
                    throw new Errors_1.BodyNotIncompleted;
                if (cpf.length != 11)
                    throw new Errors_1.CpfFormat;
                const verifyCPF = yield this.userDatabase.userByCPF(cpf);
                if (verifyCPF.length != 1)
                    throw new Errors_1.UserNotFound;
                if (verifyCPF[0].password != password)
                    throw new Errors_1.PasswordWrong;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.carsByProfile = (cpf) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userDatabase.carsByProfile(cpf);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
