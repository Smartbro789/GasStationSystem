export interface newUserDatabase{
    id:string,
    login:string,
    bonus_card_number: string
}

export interface newUser{
    id:string,
    name:string
    bonus_card_number: string,
}

export interface newUserDTO{
    name:string
    bonus_card_number: string,
}

export interface userLoginDTO{
    bonus_card_number: string,
}