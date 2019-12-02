var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.addNewUser);


module.exports = router;
