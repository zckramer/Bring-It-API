const EventModel = require('../models/event.model')

module.exports = {

    add(title, hostId, guestList, attendanceLimit, items, date, location, theme, isOver, callback) {
            const newEvent = new EventModel({title, hostId, guestList, attendanceLimit, items, date, location, theme, isOver});
            newEvent.save().then(callback);
        },
    

    findAll(callback) {
        EventModel.find().then(callback);
    }


}