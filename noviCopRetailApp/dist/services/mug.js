"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productConfig_json_1 = require("../productConfig.json");
class Mug {
    constructor() { }
    //Implementation of Calculate Discount method of interface
    calculate(quantity) {
        let price = 0.00;
        price = quantity * Number(productConfig_json_1.PRODUCTS.MUG.PRICE);
        return price;
    }
}
exports.Mug = Mug;
//# sourceMappingURL=mug.js.map