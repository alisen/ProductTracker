const BaseService = require('./base-service')
const ShopModel = require('../models/shop')

class ShopService extends BaseService {
    constructor() {
        super(ShopModel, `${__dirname}/../db/shop-database.json`)
    }
}

module.exports = new ShopService()