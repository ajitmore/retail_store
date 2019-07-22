"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productConfig_json_1 = require("../productConfig.json");
class TShirt {
    constructor() { }
    //Implementation of Calculate Discount method of interface
    calculate(quantity) {
        let price = 0.00, discount_price = Number(productConfig_json_1.PRODUCTS.TSHIRT.DISCOUNT_PRICE), discount_on_quantity = Number(productConfig_json_1.PRODUCTS.TSHIRT.DISCOUNT_ON_QUANTITY);
        if (quantity >= discount_on_quantity) {
            price = quantity * discount_price;
        }
        else {
            price = quantity * Number(productConfig_json_1.PRODUCTS.TSHIRT.PRICE);
        }
        return price;
    }
}
exports.TShirt = TShirt;
//# sourceMappingURL=tshirt.js.map