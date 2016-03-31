// ROUTES USER
var User = require('../models/user.js');
module.exports = function (app) {
    app.get('/user/:id', User.findUser);
    app.post('/user', User.create);
    app.put('/user/:id', User.update);
    app.delete('/user/:id', User.delete);

}