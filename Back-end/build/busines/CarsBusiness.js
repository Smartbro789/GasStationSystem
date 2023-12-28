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
exports.CarsBusiness = void 0;
const CarsDatabase_1 = require("../database/CarsDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
class CarsBusiness {
    constructor() {
        this.carsDatabase = new CarsDatabase_1.CarsDatabase();
        this.myCars = (idClient) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.carsDatabase.myCars(idClient);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.addCar = (car) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { carName, plate, idClient } = car;
                if (!carName || !plate)
                    throw new Error("Необхідно заповнити всі поля");
                const idCar = IdGenerator_1.GenerateId.newID();
                const newCar = {
                    idCar,
                    carName,
                    plate,
                    client_id: idClient
                };
                yield this.carsDatabase.addCar(newCar);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.removeCar = (idCar) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.carsDatabase.removeCar(idCar);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getInfoCar = (idCar) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.carsDatabase.getInfoCar(idCar);
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.CarsBusiness = CarsBusiness;
