"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordWrong = exports.UserNotFound = exports.BodyNotIncompleted = exports.CpfFormatLength = exports.CpfFormat = exports.EmailFormat = exports.NameFormat = exports.EmailAlreadyRegistered = exports.CpfAlreadyRegistered = void 0;
const CustomError_1 = require("./CustomError");
class CpfAlreadyRegistered extends CustomError_1.CustomError {
    constructor() {
        super(400, 'CPF вже використовується.');
    }
}
exports.CpfAlreadyRegistered = CpfAlreadyRegistered;
class EmailAlreadyRegistered extends CustomError_1.CustomError {
    constructor() {
        super(400, 'Електронна пошта вже використовується.');
    }
}
exports.EmailAlreadyRegistered = EmailAlreadyRegistered;
class NameFormat extends CustomError_1.CustomError {
    constructor() {
        super(400, 'Назва має містити 3 символи.');
    }
}
exports.NameFormat = NameFormat;
class EmailFormat extends CustomError_1.CustomError {
    constructor() {
        super(400, 'Електронна адреса має містити "@" і ".com"');
    }
}
exports.EmailFormat = EmailFormat;
class CpfFormat extends CustomError_1.CustomError {
    constructor() {
        super(400, 'CPF має містити 11 цифр.');
    }
}
exports.CpfFormat = CpfFormat;
class CpfFormatLength extends CustomError_1.CustomError {
    constructor() {
        super(400, 'CPF має бути просто цифрами');
    }
}
exports.CpfFormatLength = CpfFormatLength;
class BodyNotIncompleted extends CustomError_1.CustomError {
    constructor() {
        super(422, 'Всі поля обов`язкові для заповнення.');
    }
}
exports.BodyNotIncompleted = BodyNotIncompleted;
class UserNotFound extends CustomError_1.CustomError {
    constructor() {
        super(404, 'Користувач не знайдений');
    }
}
exports.UserNotFound = UserNotFound;
class PasswordWrong extends CustomError_1.CustomError {
    constructor() {
        super(401, 'Недійсний пароль.');
    }
}
exports.PasswordWrong = PasswordWrong;
