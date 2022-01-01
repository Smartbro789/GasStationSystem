"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter_1 = require("./router/userRouter");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const productsRouter_1 = require("./router/productsRouter");
const purchaseRouter_1 = require("./router/purchaseRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/Clients", userRouter_1.userRouter);
app.use("/products", productsRouter_1.productsRouter);
app.use("/products", purchaseRouter_1.purchaseRouter);
app.listen(3003, () => {
    console.log(`SERVER IS RUNNING IN PORT 3003`);
});
