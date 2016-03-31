function parcoursController($scope, $q, fileInputService, NgMap) {
    $scope.fileInputContent = "";
    $scope.onFileUpload = function (element) {
        $scope.$apply(function (scope) {
            var file = element.files[0];
            fileInputService.readFileAsync(file).then(function (fileInputContent) {
                $scope.fileInputContent = fileInputContent;
            });
        });
    };
    NgMap.getMap().then(function (map) {

    });
}