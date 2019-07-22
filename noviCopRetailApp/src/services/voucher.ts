import { IDiscountCalculator } from "../interfaces/IProductDiscount";
import { PRODUCTS } from "../productConfig.json";

export class Voucher implements IDiscountCalculator {
    
    constructor() { }

    //Implementation of Calculate Discount method of interface
    calculate = (quantity: number): number => {
        let price: number = 0.00,
            billable_qty:number = 0,
            discount_on_quantity = Number(PRODUCTS.VOUCHER.DISCOUNT_ON_QUANTITY);

        if(discount_on_quantity > 0 && quantity >= discount_on_quantity) {
            billable_qty = Math.floor(quantity/ discount_on_quantity) + (quantity % discount_on_quantity);
            price = billable_qty * Number(PRODUCTS.VOUCHER.DISCOUNT_PRICE);
        } else {
            billable_qty = quantity;
            price = billable_qty * Number(PRODUCTS.VOUCHER.PRICE);
        }
        return price;
    }
}