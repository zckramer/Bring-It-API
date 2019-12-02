const ItemModel = require('../models/item.model')

module.exports = {

    add(itemName, assignedTo, amountDesired, amountCommitted, category, callback) {
            const newItem = new ItemModel({itemName, assignedTo, amountDesired, amountCommitted, category});
            newItem.save().then(callback);
        },

    findAll(callback) {
        ItemModel.find().then(callback);
    }


}








//itemName, assignedTo, category