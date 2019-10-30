var shortId = require('shortid');

module.exports = class Product {
    constructor(productName, unit, volume, price) {
        this.productId = shortId.generate();
        this.productName = productName;
        this.unit = unit; //kg, gr, lt, ml etc..
        this.volume = volume;
        this.price = price;
        this.date = new Date();
    }
}