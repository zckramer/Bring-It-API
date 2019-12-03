const EventModel = require('../models/event.model')
const UserService = require('./user.service')

module.exports = {

    add(title, hostId, guestList, attendanceLimit, items, description, date, location, theme, isOver, callback) {
        const newEvent = new EventModel({title, hostId, guestList, attendanceLimit, items, description, date, location, theme, isOver});
        
            newEvent.save()
            UserService.findById(hostId, host => {
                host.eventsHosting.push(newEvent._id)
                host.save((host) => {
                    console.log(host)
                    })
                })
            // .then(callback);
    },
    

    findAll(callback) {
        EventModel.find().then(callback);
    },

    findById(eventId, callback) {
        EventModel.findById(eventId).then(callback);
    },


}