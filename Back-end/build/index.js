"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = require("./router/userRouter");
const productsRouter_1 = require("./router/productsRouter");
const purchaseRouter_1 = require("./router/purchaseRouter");
const AccountRouter_1 = require("./router/AccountRouter");
const carsRouter_1 = require("./router/carsRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/Clients", userRouter_1.userRouter);
app.use("/products", productsRouter_1.productsRouter);
app.use("/purchases", purchaseRouter_1.purchaseRouter);
app.use("/accounts", AccountRouter_1.accountRouter);
app.use("/cars", carsRouter_1.carsRouter);
app.listen(3003, () => {
    console.log(`SERVER IS RUNNING IN PORT 3003`);
});
