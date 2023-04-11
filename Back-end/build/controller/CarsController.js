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
exports.CarsController = void 0;
const CarsBusiness_1 = require("../busines/CarsBusiness");
class CarsController {
    constructor() {
        this.carsBusiness = new CarsBusiness_1.CarsBusiness();
        this.addCars = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { carName, plate } = req.body;
                const idClient = req.body.idClient;
                const car = {
                    idClient,
                    carName,
                    plate
                };
                console.log(car);
                yield this.carsBusiness.addCars(car);
                res.status(201).send({ message: 'Veiculo adicionado com sucesso...' });
            }
            catch (error) {
                res.status(200).send(error.message);
            }
        });
    }
}
exports.CarsController = CarsController;
