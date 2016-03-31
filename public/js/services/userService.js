// TODO SERVICE
function userService($http) {
    return {
        get: function () {
            return $http.get('/user');
        },
        update: function (id, data) {
            return $http.put('/user/' + id, data);
        },
        create: function (data) {
            return $http.post('/user', data);
        },
        delete: function (id) {
            return $http.delete('/user/' + id);
        }
    }
};