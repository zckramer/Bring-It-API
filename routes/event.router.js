const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller')

/* GET users listing. */
router.get('/', eventController.getAllEvents);

router.post('/', eventController.addNewEvent);

module.exports = router;