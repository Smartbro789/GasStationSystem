"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordWrong = exports.UserNotFound = exports.BodyNotIncompleted = exports.CpfFormatLength = exports.CpfFormat = exports.EmailFormat = exports.NameFormat = exports.EmailAlreadyRegistered = exports.CpfAlreadyRegistered = void 0;
const CustomError_1 = require("./CustomError");
class CpfAlreadyRegistered extends CustomError_1.CustomError {
    constructor() {
        super(400, 'CPF já está sendo utilizado.');
    }
}
exports.CpfAlreadyRegistered = CpfAlreadyRegistered;
class EmailAlreadyRegistered extends CustomError_1.CustomError {
    constructor() {
        super(400, 'Email já está sendo utilizado.');
    }
}
exports.EmailAlreadyRegistered = EmailAlreadyRegistered;
class NameFormat extends CustomError_1.CustomError {
    constructor() {
        super(400, 'O nome precisa conter 3 caracteres.');
    }
}
exports.NameFormat = NameFormat;
class EmailFormat extends CustomError_1.CustomError {
    constructor() {
        super(400, 'O Email precisa conter o "@" e ".com"');
    }
}
exports.EmailFormat = EmailFormat;
class CpfFormat extends CustomError_1.CustomError {
    constructor() {
        super(400, 'O cpf precisa conter 11 digitos.');
    }
}
exports.CpfFormat = CpfFormat;
class CpfFormatLength extends CustomError_1.CustomError {
    constructor() {
        super(400, 'O cpf precisa ser somente numeros');
    }
}
exports.CpfFormatLength = CpfFormatLength;
class BodyNotIncompleted extends CustomError_1.CustomError {
    constructor() {
        super(422, 'Todos os campos são necessários.');
    }
}
exports.BodyNotIncompleted = BodyNotIncompleted;
class UserNotFound extends CustomError_1.CustomError {
    constructor() {
        super(404, 'Usuario nao localizado..');
    }
}
exports.UserNotFound = UserNotFound;
class PasswordWrong extends CustomError_1.CustomError {
    constructor() {
        super(401, 'Senha inválida.');
    }
}
exports.PasswordWrong = PasswordWrong;
