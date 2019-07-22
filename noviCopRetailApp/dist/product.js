"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductDiscount {
    constructor() {
    }
    setDiscountStrategy(discountCalculator) {
        this.discountCalculator = discountCalculator;
    }
    GetDiscount(quantity) {
        return this.discountCalculator.calculate(quantity);
    }
}
exports.ProductDiscount = ProductDiscount;
//# sourceMappingURL=product.js.map