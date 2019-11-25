var express = require('express');
var router = express.Router();
const itemController = require('../controllers/item.controller')

/* GET users listing. */
router.get('/', itemController.getAllItems);

router.post('/', itemController.addNewItem);

module.exports = router;
