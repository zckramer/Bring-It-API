const userService = require('./user.service')
const User = require('../models/user.model')

describe("user.model", () => {
  describe("findAll", () => {
    test("Should call findAll from  model", () => {
      // Stubs the `findAll method so our test doesn't
      // send an actual request to the db`
      User.findAll = jest.fn(() => [])

      // Will call the stubbed `User.findAll()` method
      User.findAll()

      expect(User.findAll).toHaveBeenCalledTimes(1)
    })
  })
})