import * as mocha from "mocha";
import { expect } from "chai";

import { Checkout } from "../src/app";
describe('Checkout process', () => {
    let co: Checkout;
    let result: number = 0;
    before(() => {
        co = new Checkout();
    })
    it('for no product scan', () => {
        co.scan("");
        result = co.totalBillingAmount();
        expect(result).equal(0);
    }); 

    it('for single VOUCHER product scan', () => {
        co.scan("VOUCHER");
        result = co.totalBillingAmount();
        expect(result).equal(5.00);
    })

    it('for single VOUCHER, mug and Tshirt products scan', () => {
        co.scan("VOUCHER");
        co.scan("mug");
        co.scan("Tshirt");
        result = co.totalBillingAmount();
        expect(result).equal(32.50);
    })

    it('for two VOUCHERS and one Tshirt products scan', () => {
        co.scan("VOUCHER");
        co.scan("VOUCHER");
        co.scan("TSHIRT");
        result = co.totalBillingAmount();
        expect(result).equal(25.00);
    })

    it('for four VOUCHERS product scan', () => {
        co.scan("VOUCHER");
        co.scan("VOUCHER");
        co.scan("VOUCHER");
        co.scan("VOUCHER");
        result = co.totalBillingAmount();
        expect(result).equal(10.00);
    })

    it('for four tshirts product scan', () =>  {
        co.scan("TSHIRT");
        co.scan("TSHIRT");
        co.scan("TSHIRT");
        co.scan("TSHIRT");
        result = co.totalBillingAmount();
        expect(result).equal(76.00);
    })

    it('for three vouchers, three tshirts and one mug product scan', () =>  {
        co.scan("VOUCHER");
        co.scan("TSHIRT");
        co.scan("TSHIRT");
        co.scan("VOUCHER");
        co.scan("VOUCHER");
        co.scan("TSHIRT");
        co.scan("MUG");
        result = co.totalBillingAmount();
        expect(result).equal(74.50);
    })
  });