import productConfig from "./productConfig.json";
import { Voucher } from "./services/voucher";
import { TShirt } from "./services/tshirt.js";
import { Mug } from "./services/mug.js";

class Checkout {
    // variable declarations
    private prodConfig: any = productConfig.PRODUCTS;
    private voucher: Voucher;
    private tshirt: TShirt;
    private mug: Mug;
    private productList: string[];

    // Object initialization of classes
    constructor() {
        this.voucher = new Voucher();
        this.tshirt = new TShirt();
        this.mug = new Mug();
        this.productList = [];
    }

    // Method to scan individual item
    public scan(product: string) {
        if(String(product) && product.length > 0) {
            this.productList.push(product);
        }
    }

    // Get total billing amount for list of products
    public totalBillingAmount(): void {
        let totalBillingAmount: number = 0.00;

        console.log("Items: " + this.productList);
        
        if(this.productList && this.productList.length > 0) {
            let vouchers: string[] = this.productList.filter((prod) => prod.trim().toLowerCase() === "voucher"),
                tshirts: string[] = this.productList.filter((prod) => prod.trim().toLowerCase() === "tshirt"),
                mugs: string[] = this.productList.filter((prod) => prod.trim().toLowerCase() === "mug");

        
            let vouchersTotalPrice: number = this.voucher.calculateDiscount(vouchers.length, this.prodConfig.VOUCHER),
            tshirtsTotalPrice: number = this.tshirt.calculateDiscount(tshirts.length, this.prodConfig.TSHIRT),
            mugsTotalPrice: number = this.mug.calculateDiscount(mugs.length, this.prodConfig.MUG);

            totalBillingAmount = vouchersTotalPrice +  tshirtsTotalPrice + mugsTotalPrice;
            this.productList= [];
        }
        console.log("Total: " + parseFloat(String(totalBillingAmount)).toFixed(2) + productConfig.CURRENCY);
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