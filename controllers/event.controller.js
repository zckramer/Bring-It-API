const Event = require('../models/user.model');
const EventService = require('../services/event.service')
module.exports = {

    addNewEvent (req, res) {
        
        const { name } = req.body;

        EventService.add(name, response => {
            res.json({ response });
        })
        
    },
    getAllEvents (req, res) {
        EventService.findAll(events => {
            res.json({ events });
        })
    }



}