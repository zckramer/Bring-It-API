const itemService = require('./item.service')
const Item = require('../models/item.model')

describe("item.model", () => {
  describe("findAll", () => {
    test("Should call findAll from  model", () => {
      // Stubs the `findAll method so our test doesn't
      // send an actual request to the db`
      Item.findAll = jest.fn(() => [])

      // Will call the stubbed `Item.findAll()` method
      itemService.findAll()

      expect(Item.findAll).toHaveBeenCalledTimes(1)
    })
  })
})