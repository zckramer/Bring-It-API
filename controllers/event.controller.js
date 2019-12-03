const EventService = require('../services/event.service')
module.exports = {

    addNewEvent (req, res) {
        
        const { title, hostId, guestList, attendanceLimit, items, description, date, location, theme, isOver } = req.body;
            

        EventService.add(title, hostId, guestList, attendanceLimit, items, description, date, location, theme, isOver, response => {
            res.json({ response });
        })
        
    },

    getAllEvents (req, res) {
        EventService.findAll(events => {
            res.json({ events });
        })
    },

    getEventById (req, res) {
        const id = req.params.id;
        EventService.findById(id, event => {
            res.json({ event })
        })
    }

        

    
}


