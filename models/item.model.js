const mongoose = require("mongoose");



const Item = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },

    assignedTo: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    }
    
    

});
    module.exports = mongoose.model('item', Item);