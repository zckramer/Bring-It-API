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
    getAllUsers (req, res) {
        UserService.findAll(users => {
            res.json({ users });
        })
   }//,

    // getAllEventsInvited(req, res) {
    //     const userId = req.body.id;

    //     EventService.findAllEventsInvited(userId);
        
    // },

    // getAllEventsUserAttending (req, res) {
    //     // UserService.findAll(users => {
    //     //     res.json({ users });
    //     // })
    // },
    
    // getAllEventsUserHosting (req, res) {
    //     // UserService.findAll(users => {
    //     //     res.json({ users });
    //     // })
    // }

}