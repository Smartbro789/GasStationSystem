"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QtdNotInformed = void 0;
const CustomError_1 = require("./CustomError");
class QtdNotInformed extends CustomError_1.CustomError {
    constructor() {
        super(401, 'Кількість не може бути 0.');
    }
}
exports.QtdNotInformed = QtdNotInformed;
