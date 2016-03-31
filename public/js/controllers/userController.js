// MAIN CONTROLLER
function userController($scope, $http, userService) {
    $scope.title = "La Loop";

    function load() {
        userService.get().then(function (res) {
            $scope.users = res.data;
        });
    }
    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        userService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
    }
    $scope.update = function (data) {
        userService.update(data._id, data).then(function (res) {
            load();
        });
    }
    $scope.delete = function (data) {
        userService.delete(data._id).then(function (res) {
            load();
        });
    }
    load();
}