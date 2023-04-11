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
exports.CarsDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
const UserDatabase_1 = require("./UserDatabase");
class CarsDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'GS_Cars';
        this.addCars = (car) => __awaiter(this, void 0, void 0, function* () {
            try {
                // await CarsDatabase.connection(this.TABLE_NAME)
                //     .insert(car)
                yield UserDatabase_1.UserDatabase.connection();
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.CarsDatabase = CarsDatabase;
