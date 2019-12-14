const eventService = require("../services/event.service");
const UserService = require("../services/user.service");
const UserController = require("./user.controller");
const UserModel = require('../models/user.model');

describe("renderAll", () => {
  test("should call res.render with 'users/all' and a valid model object", async () => {
    // Arrange
    const requestMock = {};
    const responseMock = {
      render: jest.fn()
    };
    eventService.findAll = jest.fn(() => [])
    UserService.findAll = jest.fn(() => []);

    // Act
    UserController.getAllUsers(requestMock, responseMock);

    // Assert
    expect(UserService.findAll).toHaveBeenCalledTimes(1);
  });
});
