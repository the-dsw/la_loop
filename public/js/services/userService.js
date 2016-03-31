// TODO SERVICE
function userService($http, userFactory) {
    return {
        get: function () {
            return $http.get('/user');
        },
        update: function (id, data) {
            return $http.put('/user/' + id, data);
        },
        create: function (data) {
            return $http.post('/user', data).then(function (e) {
                userFactory.datas.id = e.data.id;
            });
        },
        delete: function (id) {
            return $http.delete('/user/' + id);
        }
    }
};