// MAIN CONTROLLER
function weatherController($scope, weatherService) {
     $scope.tbWeather = false;
    $scope.meteo = function() {
        
            var apikey = "a1763e2ff73afbcfb08b54de766913d2";
            weatherService.getWeather($scope.city,apikey).then(function (e) {
                $scope.icon = e.data.weather[0].icon;
                $scope.temp = e.data.main.temp;
                $scope.pressure = e.data.main.pressure;
                $scope.humidity = e.data.main.humidity;
                $scope.temp_min = e.data.main.temp_min;
                $scope.temp_max = e.data.main.temp_max;
                $scope.ville = e.data.name;
            });
        $scope.tbWeather = true;
        
        };
}
