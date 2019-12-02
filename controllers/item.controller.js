const ItemService = require('../services/item.service')
module.exports = {

    addNewItem (req, res) {
        
        const { itemName, assignedTo, amountDesired, amountCommitted, category } = req.body;
        

        ItemService.add( itemName, assignedTo, amountDesired, amountCommitted, category, response => {
            res.json({ response });
        })
        
    },
    getAllItems (req, res) {
        ItemService.findAll(items => {
            res.json({ items });
        })
    }



}