const EventModel = require('../models/event.model')
const ItemsModel = require('../models/item.model')
const UserModel = require ('../models/user.model')

const UserService = require('./user.service')

module.exports = {

    add(title, hostId, guestList, attendanceLimit, items, description, date, location, theme, isOver, callback) {
        const newEvent = new EventModel({title, hostId, guestList, attendanceLimit, items, description, date, location, theme, isOver});
        
            newEvent.save()
            .then(
            UserService.findById(hostId, host => {
                host.eventsHosting.push(newEvent._id)
                host.save()
                    })
            ).then(
            guestList.forEach(guestAttending=> {
                console.log(guestAttending)
                UserService.findById(guestAttending, guest => {
                    guest.eventsAttending.push(newEvent._id)
                    guest.save()
                })
            }))
            .then(callback)        
    },
    
    findAll(callback) {
        EventModel.find().then(callback);
    },

    findById(eventId, callback) {
        EventModel.findById(eventId).then(callback);
    },

    findEventGuestList(eventId, callback) {
        EventModel.findById(eventId).populate(
        { path: 'guestList', model: UserModel })
        .then(callback);
    },
    
    findEventItems(eventId, callback) {
        EventModel.findById(eventId).populate({ path: 'items', model: ItemsModel }).then(callback);
    },
    
}