function subscribeController($scope, $location, userService, userFactory) {
    $scope.datas = userFactory.datas;

    $scope.step = function (e) {
        userFactory.datas = $scope.datas;
        userFactory.current++;
        if (userFactory.current == 4) {
            userService.create($scope.datas);
            var path = '/index';
        } else {
            var path = '/inscription/inscription-' + userFactory.current;
        }
        $location.path(path);
    };
}