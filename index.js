var shortId = require('shortid');

Product = class {
    constructor(productName, unit, volume, price) {
        this.productId = shortId.generate();
        this.productName = productName;
        this.unit = unit; //kg, gr, lt, ml etc..
        this.volume = volume;
        this.price = price;
        this.date = new Date();
        //console.log(this);
    }

    add(shop) {
        this.shop = shop;
        if (shop.productList.indexOf(this) == -1) {
            shop.productList.push(this);
            return;
        }
        console.log("Product exists. Please check the before adding it.");
    }

    count(shop) {
        this.shop = shop;
        console.log(shop.shopName + " " + shop.shopType + " has " + shop.productList.length + " items.");
    }
};
var product = new Product();

product1 = new Product('Shampoo', 'ml', '500', '1,49');
product2 = new Product('Waterfilter', 'piece', '1', '31,99');
product3 = new Product('Sweetener', 'piece', '1200', '0,89');
product4 = new Product('Kefir', 'gr', '500', '0,79');
product5 = new Product('Tomato Sauce', 'gr', '200', '0,49');

printProducts = product => console.log(product.productId, product.productName, product.unit, product.volume, product.price);

Shop = class {
    constructor(shopType, shopName, location) {
        this.shopType = shopType; // Spätkauf, Supermarket
        this.shopName = shopName; // Edeka, Rewe, Alnatura
        this.location = location; // Greifswalder Str. 86,  10409 Berlin
        this.productList = [];
        //console.log(this);
    }

    printAllProducts() {
        this.productList.forEach(printProducts);
    }
};

shop1 = new Shop('Supermarket', 'Edeka', 'Greifswalder Str. 86, 10409 Berlin');
shop2 = new Shop('Supermarket', 'Rewe', 'Greifswalder Str. 154-156, 10409 Berlin');
shop3 = new Shop('Supermarket', 'Alnatura', 'Greifswalder Str. 89, 10409 Berlin');
shop4 = new Shop('Spätkauf', 'Hutfabrik', 'Pappelallee 3-4, 10437 Berlin');

console.log("------------shop1-----------");
product1.add(shop1);
product2.add(shop1);
product3.add(shop1);
product4.add(shop1);
product5.add(shop1);
shop1.printAllProducts();
console.log("------------shop2----------");
product2.add(shop2);
product5.add(shop2);
shop2.printAllProducts();
console.log("------------shop3-----------");
product1.add(shop3);
product4.add(shop3);
shop3.printAllProducts();
console.log("------------shop4-----------");
product3.add(shop4);
product5.add(shop4);
product5.add(shop4); //on purpose duplicate checking
shop4.printAllProducts();



//Product counts on Shops
console.log("------------Counts-----------");
product.count(shop1);
product.count(shop2);
product.count(shop3);
product.count(shop4);