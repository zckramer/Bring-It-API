const ItemModel = require('../models/item.model')
const UserModel = require('../models/user.model')
const mongoose = require('mongoose');
module.exports = {

    add(itemName, assignedTo, amountDesired, amountCommitted, category, callback) {
            const newItem = new ItemModel({itemName, assignedTo, amountDesired, amountCommitted, category});
            newItem.save().then(callback);
    },

    editItemAssignedTo(itemId, userId, callback) {
        console.log(userId)
        
        
            const Item = ItemModel.findById(itemId)
            Item.updateOne({ assignedTo: userId })
            // .then(
            //     UserModel.findById(userId)
            //     .then( user => {

            //         const _id = mongoose.Types.ObjectId(itemId)
            //         if (!user.assignedItems.includes(_id)) {
            //             user.assignedItems.push( _id )
            //             user.save()
            //             console.log(user.assignedItems)
            //             }
            // })   
            // )
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