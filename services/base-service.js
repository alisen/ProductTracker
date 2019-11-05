const fs = require('fs')

module.exports = class Service {
  constructor(model, dbPath) {
    this.model = model
    this.dbPath = dbPath
  }


  async findAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.dbPath, 'utf8', async (err, file) => {
        if (err) {
          if (err.code == 'ENOENT') {
            await this.saveAll([])
            return resolve([])
          }

          return reject(err)
        }

        const items = JSON.parse(file).map(this.model.create)

        resolve(items)
      })
    })
  }

  async add(item) {
    const allItems = await this.findAll();
    allItems.push(item)

    await this.saveAll(allItems)

    return item
  }

  async  del(itemId) {//TODO
    const allItems = await this.findAll()
    const itemIndex = allItems.findIndex(p => p.id == itemId)
    if (itemIndex < 0) {
      console.log('itemId not found for deletion')
      return
    }
    allItems.splice(itemIndex, 1)

    await this.saveAll(allItems)
  }

  async find(itemId = 1) {//TODO
    const allItems = await this.findAll()

    return allItems.find(p => p.id == itemId)
  }

  async saveAll(items) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.dbPath, JSON.stringify(items), (err, file) => {
        if (err) return reject(err)

        resolve()
      })
    })
  }
}