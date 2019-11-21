const mongoose = require("mongoose");



const Event = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }    
});
    module.exports = mongoose.model('event', Event);