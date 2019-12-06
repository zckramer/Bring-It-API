const ItemModel = require('../models/item.model')
const UserModel = require('../models/user.model')
const mongoose = require('mongoose');
module.exports = {

    add(itemName, assignedTo, amountDesired, amountCommitted, category, callback) {
            const newItem = new ItemModel({itemName, assignedTo, amountDesired, amountCommitted, category});
            newItem.save().then(callback);
    },

    editItemAssignedTo(itemId, userId, callback) {     
            // const Item = ItemModel.findById(itemId);
            // console.log(userId)
            const _id = mongoose.Types.ObjectId(userId)
            ItemModel.findByIdAndUpdate(itemId, { assignedTo: _id})
            .then(callback)   
// === Might be unecessary == Pushes to User array ==
// .then( UserModel.findById(userId).then( user => {
//         const _id = mongoose.Types.ObjectId(itemId)
//         if (!user.assignedItems.includes(_id)) {
//             user.assignedItems.push( _id )
//             user.save()
//             console.log(user.assignedItems)}}))             
    },

    editItemName(itemId, newName, callback) {
        const Item = ItemModel.findById(itemId);
        Item.updateOne({ itemName: newName })
        .then(callback)
    },

    findAll(callback) {
        ItemModel.find()
        .then(callback);
    },

    findById(itemId, callback) {
        ItemModel.findById(itemId)
        .then(callback)
    },


}








//itemName, assignedTo, category