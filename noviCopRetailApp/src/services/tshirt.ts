import { IProductDiscount } from "../interfaces/IProductDiscount";

export class TShirt implements IProductDiscount {
    
    constructor() { }

    //Implementation of Calculate Discount method of interface
    calculateDiscount(quantity: number, productPolicy: any):number {
        let price: number = 0.00,
            discount_price:number = Number(productPolicy.DISCOUNT_PRICE),
            discount_on_quantity = Number(productPolicy.DISCOUNT_ON_QUANTITY);

        if(quantity >= discount_on_quantity) {
            price = quantity * discount_price
        } else {
            price = quantity * Number(productPolicy.PRICE); 
        }
        return price;
    }
}