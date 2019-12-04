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


    // POPULATED REQUESTS
    getUserAssignedItems(req, res) {
        const id = req.params.id;
        UserService.findUserItems(id, user => {
            res.json({ user })
        })
    },
    
    getUserEventsAttending(req, res) {
        const id = req.params.id;
        UserService.findUserEventsAttending(id, user => {
            res.json({ user })
        })
    },
    
    getUserEventsHosting(req, res) {
        const id = req.params.id;
        UserService.findUserEventsHosting(id, user => {
            res.json({ user })
        })
    },

    getAllUsers (req, res) {
        UserService.findAll(users => {
            res.json({ users });
        })
   },


}