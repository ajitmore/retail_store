// Interface declaration for products to implement
// Individual product can define their own pricing strategy

export interface IDiscountCalculator {
    calculate(quantity: number): number;
}