const ItemService = require('../services/item.service')
module.exports = {

    addNewItem (req, res) {
        
        const { itemName, assignedTo, amountDesired, amountCommitted, category } = req.body;
        

        ItemService.add( itemName, assignedTo, amountDesired, amountCommitted, category, response => {
            res.json({ response });
        })
        
    },

    addItemToUser(req, res) {
        const id = req.params.id;
        const {userId} = req.body
        ItemService.addItemAssignedTo(id, userId, response => {
            res.json({ response })
            console.log(response)
        })
    },

    getAllItems (req, res) {
        ItemService.findAll(items => {
            res.json({ items });
        })
    },

    getItemById (req, res) {
        const id = req.params.id;
        ItemService.findById(id, item => {
            res.json({ item })
        })
    },



}