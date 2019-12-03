const ItemModel = require('../models/item.model')
const UserModel = require('../models/user.model')
const UserController = require('../controllers/user.controller')
module.exports = {

    add(itemName, assignedTo, amountDesired, amountCommitted, category, callback) {
            const newItem = new ItemModel({itemName, assignedTo, amountDesired, amountCommitted, category});
            newItem.save().then(callback);
    },

    addItemAssignedTo(itemId, userId, callback) {
        console.log(userId)

            // Doesn't
            const User = UserController.getUserById(userId, user => {
                user.assignedItems.push({ itemId })
            })
            console.log(User)
            // User.assignedItems.push({ itemId })

            // UserModel.findById(userId).then(user => {
            //     user.assignedItems.push( {itemId })
            // })



            // console.log("User.props " + User.props)
            // console.log("User._id " + User._id)
            // console.log("User.assignedItems " + User.assignedItems)

            // Works
            const Item = ItemModel.findById(itemId)
            Item.updateOne({ assignedTo: userId })
            
            // assignedItems

            .then(callback)
             
    },

    findAll(callback) {
        ItemModel.find().then(callback);
    },

    findById(itemId, callback) {
        ItemModel.findById(itemId).then(callback)
    },


}








//itemName, assignedTo, category