const ItemService = require('../services/item.service')
module.exports = {

    addNewItem (req, res) {
        
        const { itemName, assignedTo, amountDesired, amountCommitted, category } = req.body;
        

        ItemService.add( itemName, assignedTo, amountDesired, amountCommitted, category, response => {
            res.json({ response });
        })
        
    },

    patchAssignedTo(req, res) {
        const id = req.params.id;
        const {userId} = req.body
        ItemService.editItemAssignedTo(id, userId, response => {
            res.json({ response })
            console.log(response)
        })
    },

    patchItemName(req, res) {
        const id = req.params.id;
        const {itemName} = req.body
        ItemService.editItemName(id, itemName, response => {
            res.json({response})
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