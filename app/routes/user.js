// ROUTES USER
var User = require('../models/user.js');
module.exports = function (app) {
    app.get('/user/:id', User.findUser);
    app.post('/user', User.create);
    app.post('/activities', User.createActivity);
    app.delete('/user/:id', User.delete);

}