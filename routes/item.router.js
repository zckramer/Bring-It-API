var express = require('express');
var router = express.Router();
const itemController = require('../controllers/item.controller')

/* GET users listing. */
router.get('/', itemController.getAllItems);

router.get('/:id', itemController.getItemById);

router.patch('/:id/assigned', itemController.patchAssignedTo);

router.patch('/:id/name', itemController.patchItemName);

router.post('/', itemController.addNewItem);



module.exports = router;
