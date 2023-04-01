export interface newUserDatabase{
    id:string,
    name_client:string
    cpf: string
    password:string
    email:string
}

export interface newUser{
    id:string,
    nameClient:string
    cpf: string
    password:string
    email:string
}

export interface newUserDTO{
    nameClient:string
    cpf: string
    password:string
    email:string
}

export interface userLoginDTO{
    cpf:string
    password:string
}