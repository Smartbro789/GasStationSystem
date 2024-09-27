export interface newUserDatabase{
    id:string,
    email: string
    password: string
    name:string
    surname: string
    position: string
    dob: string
    passport: string
    salary: string
}

export interface newUser{
    id:string,
    email: string
    password: string
    name:string
    surname: string
    position: string
    dob: string
    passport: string
    salary: string
}

export interface newUserDTO{
    email: string
    password: string
    name:string
    surname: string
    position: string
    dob: string
    passport: string
    salary: string
}

export interface userLoginDTO{
    passport: string
    password:string
}