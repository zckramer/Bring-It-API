var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.get('/:id/attending', userController.getUserEventsAttending)

router.get('/:id/hosting', userController.getUserEventsHosting);

router.get('/:id/assigned-items', userController.getUserAssignedItems);


// POST new user
router.post('/', userController.addNewUser);

module.exports = router;
