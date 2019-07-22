import * as mocha from "mocha";
import { expect } from "chai";

import { Checkout } from "../src/app";
describe('Checkout process', function() {
    let co: Checkout;
    before(() => {
        co = new Checkout();
    })
    it('for no products', function() {
      let result: number = co.totalBillingAmount();
      expect(result).equal(0);
    }); 
  });