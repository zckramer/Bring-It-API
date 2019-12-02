const UserController = require('./user.controller')
const UserService = require('../services/user.service')

describe('user.controller', () => {
    describe('getAllUsers', () => {
        const requestMock = {}
        const responseMock = {
            render : jest.fn()
        }
    
        test('should return a valid object, and to have been called once', async ()=> {
            UserService.findAll(requestMock, responseMock) = jest.fn(() => [])
            await UserController.getAllUsers(requestMock, responseMock)

            expect(requestMock.render).toHaveBeenCalledTimes(1)

        })
    
    })
})