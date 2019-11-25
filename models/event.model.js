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

    guestList: {
        type: Array,
        required: true
    },
    
    attendanceLimit: {
        type: Number,
        required: true
    },

    items: {
       type:  String,
       required: false
       // [ {type: mongoose.Schema.Types.ObjectId, ref: 'items' } ],
    },
    date: {
        type: String,
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