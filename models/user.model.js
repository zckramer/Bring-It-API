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
        [ {type: mongoose.Schema.Types.ObjectId, ref: 'Events' } ],
    eventsHosting:
        [ {type: mongoose.Schema.Types.ObjectId, ref: 'Events' } ],
    assignedItems:
        [ {type: mongoose.Schema.Types.ObjectId, ref: 'Items' } ],
    
});
    module.exports = mongoose.model('user', User);