const mongoose = require("mongoose");



const Event = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    hostId: {
        type: String, 
        ref: "users",
        required: true
    },

    // this should be an aray of guestlist Ids
    guestList: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users"
    }],
    
    attendanceLimit: {
        type: Number,
        required: true
    },

    // Trying to populate with an array of unique item Ids here...
    items:  [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item"
    }],

    description: String,

    date: {
        type: String,
        
    },

    location: {
        type: String,
        
    },

    theme: {
        type: String,
    },

    isOver: {
        type: Boolean,
        
    }

});
    module.exports = mongoose.model('event', Event);