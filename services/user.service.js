const UserModel = require('../models/user.model')

module.exports = {

    add(name, image, callback) {
            const newUser = new UserModel({name, image});
            newUser.save().then(callback);
        },
    

    findAll(callback) {
        UserModel.find().then(callback);
    }


}