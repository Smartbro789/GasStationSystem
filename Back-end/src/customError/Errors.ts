import { CustomError } from "./CustomError";

export class CpfAlreadyRegistered extends CustomError{
    constructor(){
        super(400, 'CPF já está sendo utilizado.')
    }
}
export class EmailAlreadyRegistered extends CustomError{
    constructor(){
        super(400, 'Email já está sendo utilizado.')
    }
}


export class NameFormat extends CustomError{
    constructor(){
        super(400, 'O nome precisa conter 3 caracteres.')
    }
}

export class EmailFormat extends CustomError{
    constructor(){
        super(400, 'O Email precisa conter o "@" e ".com"')
    }
}

export class CpfFormat extends CustomError{
    constructor(){
        super(400, 'O cpf precisa conter 11 digitos.')
    }
}

export class CpfFormatLength extends CustomError{
    constructor(){
        super(400, 'O cpf precisa ser somente numeros')
    }
}

export class BodyNotIncompleted extends CustomError{
    constructor(){
        super(422, 'Todos os campos são necessários.')
    }
}

export class UserNotFound extends CustomError{
    constructor(){
        super(404, 'Usuario nao localizado..')
    }
}

export class PasswordWrong extends CustomError{
    constructor(){
        super(401, 'Senha inválida.')
    }
}