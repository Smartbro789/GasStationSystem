import { CustomError } from "./CustomError";

export class QtdNotInformed extends CustomError{
    constructor(){
        super(401, 'Кількість не може бути 0.')
    }
}