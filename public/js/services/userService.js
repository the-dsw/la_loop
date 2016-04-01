// TODO SERVICE
function userService($http, userFactory) {
    return {
        get: function () {
            return $http.get('/user');
        },
        create: function (data) {
            return $http.post('/user', data).then(function (e) {
                userFactory.datas.id = e.data.id;
            });
        },
        createActivity: function (data) {
            return $http.post('/activities', data);
        },
        delete: function (id) {
            return $http.delete('/user/' + id);
        }
    }
};