const EventModel = require('../models/event.model')

module.exports = {

    add(name, callback) {
            const newEvent = new EventModel({name});
            newEvent.save().then(callback);
        },
    

    findAll(callback) {
        EventModel.find().then(callback);
    }


}