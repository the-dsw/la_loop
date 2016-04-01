// TODO SERVICE
function userService($http, userFactory) {
    return {
        getUserById: function (id) {
            return $http.get('/user/' + id);
        },
        create: function (data) {
            return $http.post('/user', data).then(function (e) {
                userFactory.datas.id = e.data.id;
            });
        },
        delete: function (id) {
            return $http.delete('/user/' + id);
        },
        createActivity: function (data) {
            return $http.post('/activities', data);
        },
        userLogin: function (data) {
            return $http.post('/login', data);
        }
    }
};