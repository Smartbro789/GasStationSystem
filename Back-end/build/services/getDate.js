"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDate = void 0;
class GetDate {
}
exports.GetDate = GetDate;
GetDate.newDate = () => {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getHours();
    return (`${day}/${month}/${year}--${hour}:${minutes}`);
};
