"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mug {
    constructor() { }
    //Implementation of Calculate Discount method of interface
    calculateDiscount(quntity, productPolicy) {
        let price = 0.00;
        price = quntity * Number(productPolicy.PRICE);
        return price;
    }
}
exports.Mug = Mug;
//# sourceMappingURL=mug.js.map