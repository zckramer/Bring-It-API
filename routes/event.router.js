const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller')

/* GET eent listing. */
router.get('/', eventController.getAllEvents);

router.get('/:id', eventController.getEventById);

router.get('/:id/items', eventController.getEventItems);

router.get('/:id/guestlist', eventController.getEventGuestList);



// POST new event
router.post('/', eventController.addNewEvent);

module.exports = router;