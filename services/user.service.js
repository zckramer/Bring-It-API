const UserModel = require('../models/user.model')
const EventsModel = require('../models/event.model')

module.exports = {

    add(name, image, userName, password, email, eventsAttending, eventsHosting, assignedItems, callback) {
            const newUser = new UserModel({
                name, 
                image, 
                userName, 
                password, 
                email, 
                eventsAttending, 
                eventsHosting, 
                assignedItems
            });
            newUser.save().then(callback);
    },
    
    findAll(callback) {
        UserModel.find().then(callback);
    },

    findById(userId, callback) {
        UserModel.findById(userId).then(callback)
    },

    findEventsUserAttending(id, callback) {
        

    }


}