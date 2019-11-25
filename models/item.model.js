const mongoose = require("mongoose");



const Item = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },

    assignedTo: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},

    category: {
        type: String,
        required: true
    }
    
    

});
    module.exports = mongoose.model('item', Item);