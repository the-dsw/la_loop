function parcoursController($scope, $q, fileInputService, NgMap, userFactory, userService) {
    $scope.fileInputContent = "";
    $scope.onFileUpload = function (element) {
        $scope.$apply(function (scope) {
            var file = element.files[0];
            fileInputService.readFileAsync(file).then(function (fileInputContent) {
                userFactory.datas.GeoJson = fileInputContent;
                userService.createActivity(userFactory.datas);
            });
        });
    };
    NgMap.getMap().then(function (map) {});
}