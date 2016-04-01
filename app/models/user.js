// MODEL USER
var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

//Shema User
var userSchema = new mongoose.Schema({
    nickname: {
        type: String,
        maxlength: [14, 'nickname can have a maximum of 14 char'],
        required: [true, 'nickname required']
    },
    firstName: {
        type: String,
        maxlength: [14, 'firstName can have a maximum of 14 char'],
        required: [true, 'firstName required']
    },
    lastName: {
        type: String,
        maxlength: [14, 'lastName can have a maximum of 14 char'],
        required: [true, 'lastName required']
    },
    birthday: {
        type: Date,
        required: [true, 'birthday required']
    },
    sexe: {
        type: Boolean,
        required: [true, 'sexe required']
    },
    address1: {
        type: String,
        maxlength: [40, 'addresse1 can have a maximum of 40 char'],
        required: [true, 'addresse1 required']
    },
    address2: {
        type: String,
        maxlength: [40, 'addresse2 can have a maximum of 40 char'],
    },
    postalCode: {
        type: String,
        maxlength: [40, 'postalCode can have a maximum of 40 char'],
        required: [true, 'postalCode required']
    },
    city: {
        type: String,
        maxlength: [20, 'city can have a maximum of 20 char'],
        required: [true, 'city required']
    },
    country: {
        type: String,
        maxlength: [20, 'country can have a maximum of 20 char'],
        required: [true, 'country required']
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}/.test(v);
            },
            message: '{VALUE} is not a valid email!'
        },
        required: [true, 'email required']
    },
    password: {
        type: String,
        minlength: [6, 'password must have a minimum of 6 char'],
        required: [true, 'password required']
    },
    userCreationDate: {
        type: Date,
        default: Date.now
    },
    lastLogin: Date,
    activities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activities'
    }],
});

// activities shema

var activitiesSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    sport: String,
    GeoJson: {
        geometry: {
            type: mongoose.Schema.Types.String,
            coordinates: mongoose.Schema.Types.Array
        },
        properties: mongoose.Schema.Types.Mixed,
    },
});



// REST function User

var User = {

    model: mongoose.model('User', userSchema),

    create: function (req, res) {
        User.model.create({
            nickname: req.body.nickname,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            sexe: req.body.sexe,
            address1: req.body.address1,
            address2: req.body.address2,
            postalCode: req.body.postalCode,
            city: req.body.city,
            country: req.body.country,
            email: req.body.email,
            password: req.body.password,
            userCreationDate: req.body.userCreationDate,
            lastLogin: req.body.lastLogin,
        }, function (err, data) {
            if (!err) {
                res.send({
                    id: data._id
                });
            } else {
                console.log(err);
                res.sendStatus(400);
            }
        });
    },


    findUser: function (req, res) {
        User.model.find({
                _id: req.params.id
            },
            function (err, data) {
                if (!err) {
                    console.log(data);
                    res.send(data);
                } else {
                    console.log(err);
                    res.sendStatus(400);
                }
            });
    },


    updateUserActivities: function (userId, activity, res) {
        console.log(userId);
        User.model.findByIdAndUpdate(userId, {
                $push: {
                    activities: activity._id
                }
            },
            function (err, data) {
                res.sendStatus(200);
            });
    },

    login: function (req, res) {
        User.model.find({
            nickname: req.body.nickname,
            password: req.body.password
        }, function (err, data) {
            if (!data[0]) {
                res.send({
                    statusCode: 'bad login'
                });
            } else {
                res.send({
                    _id: data[0]._id,
                    statusCode: 200
                });
            }

        });

    },

    delete: function (req, res) {
        User.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    },

    modelA: mongoose.model('Activities', activitiesSchema),

    createActivity: function (req, res) {
        var userId = req.body.id,
            response = res;
        User.modelA.create({
            sport: req.body.sport,
            GeoJson: req.body.GeoJson
        }, function (err, data) {
            if (!err) {
                User.updateUserActivities(userId, data, response);
            } else {
                res.sendStatus(400);
            }
        });
    },

}
module.exports = User;