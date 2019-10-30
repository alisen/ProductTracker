const Chalk = require('chalk')

module.exports = class Shop {
    constructor(shopType, shopName, location) {
        this.shopType = shopType; // Spätkauf, Supermarket
        this.shopName = shopName; // Edeka, Rewe, Alnatura
        this.location = location; // Greifswalder Str. 86,  10409 Berlin
        this.productList = [];
    }

    add(shop, product) {
        this.shop = shop.shopName;
        if (shop.productList.indexOf(product) == -1) {
            shop.productList.push(product);
            return;
        }
        console.log(Chalk.bgRed("Product exists. Please check the before adding it."));
    }

    count(shop) {
        this.shop = shop.shopName;
        console.log(Chalk.blueBright(shop.shopName + " " + shop.shopType + " has " + shop.productList.length + " items."));
    }

    printAllShopProducts(shop) {
        this.shop = shop.shopName;
        shop.productList.forEach(printShopProducts);
    }
};

printShopProducts = product => console.log(Chalk.magentaBright(product.productId, product.productName, product.unit, product.volume, product.price));