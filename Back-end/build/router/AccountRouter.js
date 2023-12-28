"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRouter = void 0;
const express_1 = __importDefault(require("express"));
const AccountController_1 = require("../controller/AccountController");
exports.accountRouter = express_1.default.Router();
const accountController = new AccountController_1.AccountController();
exports.accountRouter.get('/:idClient', accountController.getAccount);
