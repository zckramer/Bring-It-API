const UserService = require('../services/user.service')
module.exports = {

    addNewUser (req, res) {
        
        const {
            name, 
            image, 
            userName, 
            password, 
            email, 
            eventsAttending, 
            eventsHosting, 
            assignedItems } = req.body;

        UserService.add(
            name, 
            image, 
            userName, 
            password, 
            email, 
            eventsAttending, 
            eventsHosting, 
            assignedItems,
             response => {
            res.json({ response });
        })
        
    },
    getAllUsers (req, res) {
        UserService.findAll(users => {
            res.json({ users });
        })
    }

}