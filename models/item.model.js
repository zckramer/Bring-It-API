const mongoose = require("mongoose");



const Item = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
// assignedTo needs to be able to be null or empty but
// I can't get it to accept an empty string to show
// that it hasn't been assigned to anyone yet.
// required: false doesn't do the trick
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        required: false
    },
    
    amountDesired: Number,
    amountCommitted: Number,

    category: {
        type: String,
        required: true
    }
    
    

});
    module.exports = mongoose.model('item', Item);