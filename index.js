const qrcode = require('qrcode-terminal');
const util = require('util')
const Product = require('./models/product')
const Shop = require('./models/shop')
const ShopService = require('./services/shop-service')

qrcode.generate('http://alisen.xyz', {
    small: true
});

async function main() {
    const product1 = new Product('Shampoo', 'ml', '500', '1,49');
    const product2 = new Product('Waterfilter', 'piece', '1', '31,99');
    const product3 = new Product('Sweetener', 'piece', '1200', '0,89');
    const product4 = new Product('Kefir', 'gr', '500', '0,79');
    const product5 = new Product('Tomato Sauce', 'gr', '200', '0,49');

    const shop1 = new Shop('Supermarket', 'Edeka', 'Greifswalder Str. 86, 10409 Berlin');
    const shop2 = new Shop('Supermarket', 'Rewe', 'Greifswalder Str. 154-156, 10409 Berlin');
    const shop3 = new Shop('Supermarket', 'Alnatura', 'Greifswalder Str. 89, 10409 Berlin');
    const shop4 = new Shop('Spätkauf', 'Hutfabrik', 'Pappelallee 3-4, 10437 Berlin');

    console.log("------------shop1-----------");
    shop1.add(product1);
    shop1.add(product2);
    shop1.add(product3);
    shop1.add(product4);
    shop1.add(product5);
    shop1.printAllShopProducts();
    console.log("------------shop2----------");
    shop2.add(product2);
    shop2.add(product5);
    shop2.printAllShopProducts();
    console.log("------------shop3-----------");
    shop3.add(product3);
    shop3.add(product4);
    shop3.printAllShopProducts();
    console.log("------------shop4-----------");
    shop4.add(product3);
    shop4.add(product5);
    shop4.add(product5); //on purpose duplicate checking
    shop4.printAllShopProducts();
    //Product counts on Shops
    console.log("------------Counts-----------");
    shop1.count();
    shop2.count();
    shop3.count();
    shop4.count();

    console.log("-----ShopServiceResult-1-------");
    await ShopService.add(shop1)
    await ShopService.add(shop2)
    await ShopService.add(shop3)
    await ShopService.add(shop4)
    const shopService = await ShopService.findAll()

    console.log(util.inspect(shopService, false, null, true))

/*  console.log("-----ShopServiceResult-2-------");
    await ShopService.del(shop4.id)//TODO
    shopService = await ShopService.findAll()
    console.log(util.inspect(shopService, false, null, true)) */

}

main()