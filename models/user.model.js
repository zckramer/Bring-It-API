const mongoose = require("mongoose");



const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    image: {
        type: String
    }
    
});
    module.exports = mongoose.model('user', User);