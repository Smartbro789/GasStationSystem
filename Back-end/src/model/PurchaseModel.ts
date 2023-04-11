export interface PurchaseDTO{
    value:number,
    carId:string,
    clientId:string,
    productId:string,
    litros:number
}

export interface Purchase{
    id:string,
    value:number,
    carId:string
    clientId:string,
    productId:string,
    litros:number,
    date:string
}