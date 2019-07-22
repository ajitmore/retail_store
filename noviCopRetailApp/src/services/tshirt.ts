import { IDiscountCalculator } from "../interfaces/IProductDiscount";
import { PRODUCTS } from "../productConfig.json";

export class TShirt implements IDiscountCalculator {
    
    constructor() { }

    //Implementation of Calculate Discount method of interface
    calculate(quantity: number):number {
        let price: number = 0.00,
            discount_price:number = Number(PRODUCTS.TSHIRT.DISCOUNT_PRICE),
            discount_on_quantity = Number(PRODUCTS.TSHIRT.DISCOUNT_ON_QUANTITY);

        if(quantity >= discount_on_quantity) {
            price = quantity * discount_price
        } else {
            price = quantity * Number(PRODUCTS.TSHIRT.PRICE); 
        }
        return price;
    }
}