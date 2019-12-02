const EventService = require('../services/event.service')
module.exports = {

    addNewEvent (req, res) {
        
        const { title, hostId, guestList, attendanceLimit, items, description, date, location, theme, isOver } = req.body;
        console.log("Add New Event was called")        

        EventService.add(title, hostId, guestList, attendanceLimit, items, description, date, location, theme, isOver, response => {
            res.json({ response });
        })
        
    },
    getAllEvents (req, res) {
        EventService.findAll(events => {
            res.json({ events });
        })
    }



}