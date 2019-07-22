"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productConfig_json_1 = require("./productConfig.json");
const product_1 = require("./product");
const voucher_1 = require("./services/voucher");
const tshirt_1 = require("./services/tshirt");
const mug_1 = require("./services/mug");
class Checkout {
    // Object initialization of classes
    constructor() {
        this.productList = [];
        this.productDiscount = new product_1.ProductDiscount();
    }
    // Method to scan individual item
    scan(product) {
        if (String(product) && product.length > 0) {
            this.productList.push(product);
        }
    }
    // Get total billing amount for list of products
    totalBillingAmount() {
        let totalBillingAmount = 0, vouchersTotalPrice = 0, tshirtsTotalPrice = 0, mugsTotalPrice = 0;
        if (this.productList && this.productList.length > 0) {
            let vouchers = this.productList.filter((prod) => prod.trim().toLowerCase() === "voucher"), tshirts = this.productList.filter((prod) => prod.trim().toLowerCase() === "tshirt"), mugs = this.productList.filter((prod) => prod.trim().toLowerCase() === "mug");
            if (vouchers.length > 0) {
                this.productDiscount.setDiscountStrategy(new voucher_1.Voucher());
                vouchersTotalPrice = this.productDiscount.GetDiscount(vouchers.length);
            }
            if (tshirts.length > 0) {
                this.productDiscount.setDiscountStrategy(new tshirt_1.TShirt());
                tshirtsTotalPrice = this.productDiscount.GetDiscount(tshirts.length);
            }
            if (mugs.length > 0) {
                this.productDiscount.setDiscountStrategy(new mug_1.Mug());
                mugsTotalPrice = this.productDiscount.GetDiscount(mugs.length);
            }
            totalBillingAmount = vouchersTotalPrice + tshirtsTotalPrice + mugsTotalPrice;
            this.productList = [];
        }
        return parseFloat(String(totalBillingAmount));
    }
}
exports.Checkout = Checkout;
// Checkout class object initiation with different products combination
let co = new Checkout();
let totalBill = 0;
co.scan("VOUCHER");
co.scan("TSHIRT");
co.scan("MUG");
totalBill = co.totalBillingAmount();
console.log("Items: VOUCHER, TSHIRT, MUG");
console.log("Total: " + totalBill.toFixed(2) + productConfig_json_1.CURRENCY);
console.log("\n");
co.scan("VOUCHER");
co.scan("TSHIRT");
co.scan("VOUCHER");
totalBill = co.totalBillingAmount();
console.log("Items: VOUCHER, TSHIRT, VOUCHER");
console.log("Total: " + totalBill.toFixed(2) + productConfig_json_1.CURRENCY);
console.log("\n");
co.scan("TSHIRT");
co.scan("TSHIRT");
co.scan("TSHIRT");
co.scan("VOUCHER");
co.scan("TSHIRT");
totalBill = co.totalBillingAmount();
console.log("Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT");
console.log("Total: " + totalBill.toFixed(2) + productConfig_json_1.CURRENCY);
console.log("\n");
co.scan("VOUCHER");
co.scan("TSHIRT");
co.scan("VOUCHER");
co.scan("VOUCHER");
co.scan("MUG");
co.scan("TSHIRT");
co.scan("TSHIRT");
totalBill = co.totalBillingAmount();
console.log("Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT");
console.log("Total: " + totalBill.toFixed(2) + productConfig_json_1.CURRENCY);
//# sourceMappingURL=app.js.map