"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRouter = void 0;
const express_1 = __importDefault(require("express"));
const CarsController_1 = require("../controller/CarsController");
exports.carsRouter = express_1.default.Router();
const carsController = new CarsController_1.CarsController();
exports.carsRouter.post('/insert', carsController.addCars);
