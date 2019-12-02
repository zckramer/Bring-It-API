const eventService = require('./event.service')
const Event = require('../models/event.model')

describe("event.model", () => {
  describe("findAll", () => {
    test("Should call findAll from  model", () => {
      // Stubs the `findAll method so our test doesn't
      // send an actual request to the db`
      Event.findAll = jest.fn(() => [])

      // Will call the stubbed `Event.findAll()` method
      eventService.findAll()

      expect(Event.findAll).toHaveBeenCalledTimes(1)
    })
  })
})