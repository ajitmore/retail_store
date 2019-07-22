"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productConfig_json_1 = require("../productConfig.json");
class Voucher {
    constructor() {
        //Implementation of Calculate Discount method of interface
        this.calculate = (quantity) => {
            let price = 0.00, billable_qty = 0, discount_on_quantity = Number(productConfig_json_1.PRODUCTS.VOUCHER.DISCOUNT_ON_QUANTITY);
            if (discount_on_quantity > 0 && quantity >= discount_on_quantity) {
                billable_qty = Math.floor(quantity / discount_on_quantity) + (quantity % discount_on_quantity);
                price = billable_qty * Number(productConfig_json_1.PRODUCTS.VOUCHER.DISCOUNT_PRICE);
            }
            else {
                billable_qty = quantity;
                price = billable_qty * Number(productConfig_json_1.PRODUCTS.VOUCHER.PRICE);
            }
            return price;
        };
    }
}
exports.Voucher = Voucher;
//# sourceMappingURL=voucher.js.map