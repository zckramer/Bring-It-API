const mongoose = require("mongoose");



const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    userName: String,
    password: String,
    email: String,
    eventsAttending: 
        [ {type: mongoose.Schema.Types.ObjectId, ref: 'events' } ],
    eventsHosting:
        [ {type: mongoose.Schema.Types.ObjectId, ref: 'events' } ],
    assignedItems:
        [ {type: mongoose.Schema.Types.ObjectId, ref: 'items' } ],
    
});
    module.exports = mongoose.model('user', User);