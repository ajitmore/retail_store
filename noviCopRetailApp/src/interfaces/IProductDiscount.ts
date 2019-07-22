// Interface declaration for products to implement
// Individual product can define their own pricing strategy

export interface IProductDiscount {
    calculateDiscount(quntity: number, productPolicy: any): number;
}