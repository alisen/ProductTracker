const Chalk = require('chalk')
const shortId = require('shortid');
const Product = require('./product')

module.exports = class Shop {
    constructor(shopType, shopName, location, products = []) {
        this.id = shortId.generate()
        this.shopType = shopType // Spätkauf, Supermarket
        this.shopName = shopName // Edeka, Rewe, Alnatura
        this.location = location // Greifswalder Str. 86,  10409 Berlin
        this.products = products
    }

    add(product) {
        if (this.products.indexOf(product) == -1) {
            this.products.push(product)
            return
        }
        console.log(Chalk.bgRed("Product exists. Please check the before adding it."))
    }

    count() {
        console.log(Chalk.blueBright(this.shopName + " " + this.shopType + " has " + this.products.length + " items."))
    }

    printAllShopProducts() {
        this.products.forEach(printShopProducts)
    }

    static create({ shopType, shopName, location, products }) {
        const shop = new Shop(shopType, shopName, location, products)
        shop.products = products.map(Product.create)
        return shop
    }
}

printShopProducts = product => console.log(Chalk.magentaBright(product.productId, product.productName, product.unit, product.volume, product.price))