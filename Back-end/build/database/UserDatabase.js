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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'GS_Clients';
        this.signup = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, nameClient, cpf, password, email } = user;
                const newUser = {
                    id,
                    nameClient,
                    cpf,
                    password,
                    email
                };
                yield UserDatabase.connection(this.TABLE_NAME)
                    .insert(newUser);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.userById = (idClient) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserDatabase.connection(this.TABLE_NAME)
                    .select()
                    .where({ id: idClient });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.userByCPF = (cpf) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserDatabase.connection(this.TABLE_NAME)
                    .select()
                    .where({ cpf });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.userByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserDatabase.connection(this.TABLE_NAME)
                    .select()
                    .where({ email });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getProfile = (token) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserDatabase.connection(this.TABLE_NAME)
                    .select()
                    .where({ id: token.id });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.removeClient = (idClient) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserDatabase.connection(this.TABLE_NAME)
                    .delete()
                    .where({ id: idClient });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.changePassword = (newPassword) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { newPass, idClient } = newPassword;
                yield UserDatabase.connection(this.TABLE_NAME)
                    .update({
                    password: newPass
                })
                    .where({ id: idClient });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.changeLimit = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { newLimit, idClient } = user;
                yield UserDatabase.connection(this.TABLE_NAME)
                    .update({
                    credit_limit: newLimit
                })
                    .where({ id: idClient });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.UserDatabase = UserDatabase;
