const ItemService = require('../services/item.service')
module.exports = {

    addNewItem (req, res) {
        
        const { itemName, assignedTo, category } = req.body;
        

        ItemService.add( itemName, assignedTo, category , response => {
            res.json({ response });
        })
        
    },
    getAllItems (req, res) {
        ItemService.findAll(items => {
            res.json({ items });
        })
    }



}