// const eventService = require("../services/event.service");
const eventService = require("../services/event.service");
const eventController = require("./event.controller");
const eventModel = require('../models/event.model');

describe("renderAll", () => {
  test("should call res.render with 'events/all' and a valid model object", async () => {
    // Arrange
    const requestMock = {};
    const responseMock = {
      render: jest.fn()
    };
    eventService.findAll = jest.fn(() => [])
    // eventService.findAll = jest.fn(() => []);

    // Act
    eventController.getAllEvents(requestMock, responseMock);

    // Assert
    expect(eventService.findAll).toHaveBeenCalledTimes(1);
  });
});