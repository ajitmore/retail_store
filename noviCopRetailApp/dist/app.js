"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productConfig_json_1 = __importDefault(require("./productConfig.json"));
const voucher_1 = require("./services/voucher");
const tshirt_js_1 = require("./services/tshirt.js");
const mug_js_1 = require("./services/mug.js");
class Checkout {
    // Object initialization of classes
    constructor() {
        // variable declarations
        this.prodConfig = productConfig_json_1.default.PRODUCTS;
        this.voucher = new voucher_1.Voucher();
        this.tshirt = new tshirt_js_1.TShirt();
        this.mug = new mug_js_1.Mug();
        this.productList = [];
    }
    // Method to scan individual item
    scan(product) {
        if (String(product) && product.length > 0) {
            this.productList.push(product);
        }
    }
    // Get total billing amount for list of products
    totalBillingAmount() {
        let totalBillingAmount = 0.00;
        console.log("Items: " + this.productList);
        if (this.productList && this.productList.length > 0) {
            let vouchers = this.productList.filter((prod) => prod.trim().toLowerCase() === "voucher"), tshirts = this.productList.filter((prod) => prod.trim().toLowerCase() === "tshirt"), mugs = this.productList.filter((prod) => prod.trim().toLowerCase() === "mug");
            let vouchersTotalPrice = this.voucher.calculateDiscount(vouchers.length, this.prodConfig.VOUCHER), tshirtsTotalPrice = this.tshirt.calculateDiscount(tshirts.length, this.prodConfig.TSHIRT), mugsTotalPrice = this.mug.calculateDiscount(mugs.length, this.prodConfig.MUG);
            totalBillingAmount = vouchersTotalPrice + tshirtsTotalPrice + mugsTotalPrice;
            this.productList = [];
        }
        console.log("Total: " + parseFloat(String(totalBillingAmount)).toFixed(2) + productConfig_json_1.default.CURRENCY);
    }
}
// Checkout class object initiation with different products combination
var co = new Checkout();
co.scan("VOUCHER");
co.scan("TSHIRT");
co.scan("MUG");
co.totalBillingAmount();
console.log("\n");
co.scan("VOUCHER");
co.scan("TSHIRT");
co.scan("VOUCHER");
co.totalBillingAmount();
console.log("\n");
co.scan("TSHIRT");
co.scan("TSHIRT");
co.scan("TSHIRT");
co.scan("VOUCHER");
co.scan("TSHIRT");
co.totalBillingAmount();
console.log("\n");
co.scan("VOUCHER");
co.scan("TSHIRT");
co.scan("VOUCHER");
co.scan("VOUCHER");
co.scan("MUG");
co.scan("TSHIRT");
co.scan("TSHIRT");
co.totalBillingAmount();
//# sourceMappingURL=app.js.map