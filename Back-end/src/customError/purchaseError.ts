import { CustomError } from "./CustomError";

export class QtdNotInformed extends CustomError{
    constructor(){
        super(401, 'Quantidade não pode ser 0.')
    }
}