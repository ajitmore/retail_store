"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Voucher {
    constructor() {
        this.calculateDiscount = (quantity, productPolicy) => {
            let price = 0.00;
            let billable_qty = 0;
            let discount_on_quantity = Number(productPolicy.DISCOUNT_ON_QUANTITY);
            if (discount_on_quantity > 0 && quantity >= discount_on_quantity) {
                billable_qty = Math.floor(quantity / discount_on_quantity) + (quantity % discount_on_quantity);
            }
            else {
                billable_qty = quantity;
            }
            price = billable_qty * Number(productPolicy.DISCOUNT_PRICE);
            return price;
        };
    }
}
exports.Voucher = Voucher;
//# sourceMappingURL=product.js.map