import { IDiscountCalculator } from "./interfaces/IProductDiscount";
export class ProductDiscount {
    private discountCalculator: IDiscountCalculator;

    constructor() {
    }

    public setDiscountStrategy(discountCalculator: IDiscountCalculator) {
        this.discountCalculator = discountCalculator;
    }

    public GetDiscount(quantity: number): number {
        return this.discountCalculator.calculate(quantity);
    }
}