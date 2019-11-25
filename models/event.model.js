const mongoose = require("mongoose");



const Event = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    hostId: {
        type: String,
        required: true
    },

    // this should be an aray of guestlist Ids
    guestList: {
        type: Array,
        required: true
    },
    
    attendanceLimit: {
        type: Number,
        required: true
    },

    // Trying to populate with an array of unique item Ids here...
    items:  [mongoose.Schema.Types.ObjectId] ,

    date: {
        type: Date,
        required: false
    },

    location: {
        type: String,
        required: true
    },

    theme: {
        type: String,
        required: true
    },

    isOver: {
        type: Boolean,
        required: true
    }

});
    module.exports = mongoose.model('event', Event);