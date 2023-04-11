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
const UserDatabase_1 = require("../database/UserDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
class CarsBusiness {
    constructor() {
        this.carsDatabase = new CarsDatabase_1.CarsDatabase();
        this.clientsDatabase = new UserDatabase_1.UserDatabase();
        this.addCars = (car) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { carName, plate, idClient } = car;
                if (!carName || !plate)
                    throw new Error("Nome e placa precisam ser inseridos.");
                const id = IdGenerator_1.GenerateId.newID();
                const newCar = {
                    id,
                    carName,
                    plate
                };
                yield this.carsDatabase.addCars(newCar);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.CarsBusiness = CarsBusiness;
