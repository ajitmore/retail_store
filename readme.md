# This challenge is solved using combination of **[TypeScript](http://www.typescriptlang.org/)** and **[Node.JS](https://nodejs.org/en/)**.

* The code is based on SOLID principles. Here I have implemented *IProductDiscount* interface to calculate discount
* Any product can consume interface and implement their own calculate discount strategy
* The discount strategy is configured in `productConfig.json` file for individual product
* Classes are under services folder, for eg. `voucher, mug, tshirt` and have their individual calculation logic independent to other
* The entire typescript code are in the **src** folder, output files are in **dist** folder, which will be used for production deployment
* `app.ts` has responsibility to add products and get billing amount after applying respective product discounts
* `tests` directory contains `*.test.ts` file for unit test cases

## Prerequisites
1. Install Node.JS [Refer link](https://nodejs.org/en/download/)
2. Install TypeScript `npm install -g typescript` [Refer link](http://www.typescriptlang.org/index.html#download-links)
3. For testing on command line, try `node -v` for Node.JS and `tsc -v` for typescript

## Steps to execute challenge

1. Clone code `git clone https://github.com/ajitmore/retail_store.git`
2. Do `cd retail_store/noviCopRetailApp/`
3. In noviCopRetailApp folder, run `npm install`
4. For test and code coverage run `npm run testWithCoverage`. New folder `coverage` is created under `noviCopRetailApp` directory. 
```  
  Checkout process
    ✓ for no product scan
    ✓ for single VOUCHER product scan
    ✓ for single VOUCHER, mug and Tshirt products scan
    ✓ for two VOUCHERS and one Tshirt products scan
    ✓ for four VOUCHERS product scan
    ✓ for four tshirts product scan
    ✓ for three vouchers, three tshirts and one mug product scan


  7 passing (38ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
```
5. Open *coverage/Icov-report/index.html* to code coverage report.
6. then, run `npm run start` or `node ./dist/app.js` to run Node.JS code

The output will look like as below
```
Items: VOUCHER,TSHIRT,MUG
Total: 32.50€


Items: VOUCHER,TSHIRT,VOUCHER
Total: 25.00€


Items: TSHIRT,TSHIRT,TSHIRT,VOUCHER,TSHIRT
Total: 81.00€


Items: VOUCHER,TSHIRT,VOUCHER,VOUCHER,MUG,TSHIRT,TSHIRT
Total: 74.50€
```
