const ItemModel = require('../models/item.model')
const UserModel = require('../models/user.model')

module.exports = {

    add(itemName, assignedTo, amountDesired, amountCommitted, category, callback) {
            const newItem = new ItemModel({itemName, assignedTo, amountDesired, amountCommitted, category});
            newItem.save().then(callback);
    },

    addItemAssignedTo(itemId, userId, callback) {
            const User = UserModel.findById(userId)
            const Item = ItemModel.findById(itemId)
            
            Item.updateOne({ assignedTo: userId })

            .then(callback)
        
            

            // console.log(Item)
            // console.log(User)
            // User.assignedItems.push(Item._id)


            // ItemModel.findByIdAndUpdate(itemId, {assignedTo: userId})
            // ItemModel.findById(itemId).push
            
    },

    findAll(callback) {
        ItemModel.find().then(callback);
    },

    findById(itemId, callback) {
        ItemModel.findById(itemId).then(callback)
    },


}








//itemName, assignedTo, category