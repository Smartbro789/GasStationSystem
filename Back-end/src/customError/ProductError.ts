import { CustomError } from "./CustomError";

export class ProductNotFound extends CustomError{
    constructor(){
        super(404, 'Produto não localizado.')
    }
}