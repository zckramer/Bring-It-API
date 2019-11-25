const EventService = require('../services/event.service')
module.exports = {

    addNewEvent (req, res) {
        
        const { title, hostId, guestList, attendanceLimit, items, date, location, theme, isOver } = req.body;
        

        EventService.add(title, hostId, guestList, attendanceLimit, items, date, location, theme, isOver, response => {
            res.json({ response });
        })
        
    },
    getAllEvents (req, res) {
        EventService.findAll(events => {
            res.json({ events });
        })
    }



}