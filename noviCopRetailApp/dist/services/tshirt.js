"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TShirt {
    constructor() { }
    //Implementation of Calculate Discount method of interface
    calculateDiscount(quantity, productPolicy) {
        let price = 0.00, discount_price = Number(productPolicy.DISCOUNT_PRICE), discount_on_quantity = Number(productPolicy.DISCOUNT_ON_QUANTITY);
        if (quantity >= discount_on_quantity) {
            price = quantity * discount_price;
        }
        else {
            price = quantity * Number(productPolicy.PRICE);
        }
        return price;
    }
}
exports.TShirt = TShirt;
//# sourceMappingURL=tshirt.js.map