const UserService = require('../services/user.service')
const EventService = require('../services/event.service')

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

    getUserById(req, res) {
        const id  = req.params.id;
        UserService.findById(id, user => {
            res.json({ user })
        })
    },

    getUserHostedEvents(req, res) {
        const id = req.params.id;
        UserService.findUserHostedEvents(id, userPopulated => {
            res.json({ userPopulated })
        })
    },

    getUserAssignedItems(req, res) {
        const id = req.params.id;
        UserService.findUserItems(id, userPopulated => {
            res.json({ userPopulated })
        })
    },

    getAllUsers (req, res) {
        UserService.findAll(users => {
            res.json({ users });
        })
   },


}