import { IProductDiscount } from "../interfaces/IProductDiscount";

export class Voucher implements IProductDiscount {
    
    constructor() { }

    //Implementation of Calculate Discount method of interface
    calculateDiscount = (quantity: number, productPolicy: any): number => {
        let price: number = 0.00,
            billable_qty:number = 0,
            discount_on_quantity = Number(productPolicy.DISCOUNT_ON_QUANTITY);

        if(discount_on_quantity > 0 && quantity >= discount_on_quantity) {
            billable_qty = Math.floor(quantity/ discount_on_quantity) + (quantity % discount_on_quantity);
            price = billable_qty * Number(productPolicy.DISCOUNT_PRICE);
        } else {
            billable_qty = quantity;
            price = billable_qty * Number(productPolicy.PRICE);
        }
        return price;
    }
}