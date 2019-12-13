const eventService = require("../services/event.service");
const ItemService = require("../services/item.service");
const ItemController = require("./item.controller");
const ItemModel = require('../models/item.model');

describe("renderAll", () => {
  test("should call res.render with 'items/all' and a valid model object", async () => {
    // Arrange
    const requestMock = {};
    const responseMock = {
      render: jest.fn()
    };
    eventService.findAll = jest.fn(() => [])
    ItemService.findAll = jest.fn(() => []);

    // Act
    ItemController.getAllItems(requestMock, responseMock);

    // Assert
    expect(ItemService.findAll).toHaveBeenCalledTimes(1);
  });
});