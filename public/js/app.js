angular.module('app', ['ngRoute'])
    .config(routes)
    .controller('userController', userController)
    .service('userService', userService)