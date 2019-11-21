const User = require('../models/user.model');
const UserService = require('../services/user.service')
module.exports = {

    addNewUser (req, res) {
        
        const { name, image } = req.body;

        UserService.add(name, image, response => {
            res.json({ response});
        })
        
    },
    getAllUsers (req, res) {
        UserService.findAll(users => {
            res.json({ users });
        })
    }



}