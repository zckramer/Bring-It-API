const ItemModel = require('../models/item.model')

module.exports = {

    add(itemName, assignedTo, category, callback) {
            const newItem = new ItemModel({itemName, assignedTo, category});
            newItem.save().then(callback);
        },

    findAll(callback) {
        ItemModel.find().then(callback);
    }


}








//itemName, assignedTo, category