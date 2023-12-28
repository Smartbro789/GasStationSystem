import { CustomError } from "./CustomError";

export class CpfAlreadyRegistered extends CustomError{
    constructor(){
        super(400, 'CPF вже використовується.')
    }
}
export class EmailAlreadyRegistered extends CustomError{
    constructor(){
        super(400, 'Електронна пошта вже використовується.')
    }
}


export class NameFormat extends CustomError{
    constructor(){
        super(400, 'Назва має містити 3 символи.')
    }
}

export class EmailFormat extends CustomError{
    constructor(){
        super(400, 'Електронна адреса має містити "@" і ".com"')
    }
}

export class CpfFormat extends CustomError{
    constructor(){
        super(400, 'CPF має містити 11 цифр.')
    }
}

export class CpfFormatLength extends CustomError{
    constructor(){
        super(400, 'CPF має бути просто цифрами')
    }
}

export class BodyNotIncompleted extends CustomError{
    constructor(){
        super(422, 'Всі поля обов`язкові для заповнення.')
    }
}

export class UserNotFound extends CustomError{
    constructor(){
        super(404, 'Користувач не знайдений.')
    }
}

export class PasswordWrong extends CustomError{
    constructor(){
        super(401, 'Недійсний пароль.')
    }
}