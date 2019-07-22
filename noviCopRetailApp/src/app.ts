import { CURRENCY } from "./productConfig.json";
import { ProductDiscount } from "./product";
import { Voucher } from "./services/voucher.js";
import { TShirt } from "./services/tshirt.js";
import { Mug } from "./services/mug.js";

class Checkout {
    // variable declarations
    private productList: string[];
    private productDiscount: ProductDiscount;

    // Object initialization of classes
    constructor() {
        this.productList = [];
        this.productDiscount = new ProductDiscount();
    }

    // Method to scan individual item
    public scan(product: string) {
        if(String(product) && product.length > 0) {
            this.productList.push(product);
        }
    }

    // Get total billing amount for list of products
    public totalBillingAmount(): void {
        let totalBillingAmount: number = 0,
            vouchersTotalPrice: number = 0,
            tshirtsTotalPrice: number = 0,
            mugsTotalPrice: number = 0;

        console.log("Items: " + this.productList);
        
        if(this.productList && this.productList.length > 0) {
            let vouchers: string[] = this.productList.filter((prod) => prod.trim().toLowerCase() === "voucher"),
                tshirts: string[] = this.productList.filter((prod) => prod.trim().toLowerCase() === "tshirt"),
                mugs: string[] = this.productList.filter((prod) => prod.trim().toLowerCase() === "mug");

            if(vouchers.length > 0) {
                this.productDiscount.setDiscountStrategy(new Voucher());
                vouchersTotalPrice = this.productDiscount.GetDiscount(vouchers.length);
            }
            
            if(tshirts.length > 0) {
                this.productDiscount.setDiscountStrategy(new TShirt());
                tshirtsTotalPrice = this.productDiscount.GetDiscount(tshirts.length);
            }
            
            if(mugs.length > 0) {
                this.productDiscount.setDiscountStrategy(new Mug());
                mugsTotalPrice = this.productDiscount.GetDiscount(mugs.length);
            }

            totalBillingAmount = vouchersTotalPrice +  tshirtsTotalPrice + mugsTotalPrice;
            this.productList= [];
        }
        console.log("Total: " + parseFloat(String(totalBillingAmount)).toFixed(2) + CURRENCY);
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