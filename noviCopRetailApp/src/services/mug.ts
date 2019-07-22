import { IProductDiscount } from "../interfaces/IProductDiscount";

export class Mug implements IProductDiscount {
    
    constructor() { }
    
    //Implementation of Calculate Discount method of interface
    calculateDiscount(quntity: number, productPolicy: any): number {
        let price: number = 0.00;
        price = quntity * Number(productPolicy.PRICE);
        return price;
    }
}