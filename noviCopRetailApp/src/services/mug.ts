import { IDiscountCalculator } from "../interfaces/IProductDiscount";
import { PRODUCTS } from "../productConfig.json";

export class Mug implements IDiscountCalculator {
    
    constructor() { }
    
    //Implementation of Calculate Discount method of interface
    calculate(quantity: number): number {
        let price: number = 0.00;
        price = quantity * Number(PRODUCTS.MUG.PRICE);
        return price;
    }
}