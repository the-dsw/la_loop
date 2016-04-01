// MAIN CONTROLLER
function weatherController($scope, weatherService, userFactory) {
     $scope.tbWeather = false;
    $scope.meteo = function() {
       

            weatherService.getWeather($scope.city).then(function (e) {
                userFactory.datas.weather = e.data;
                $scope.icon = e.data.weather[0].icon;
                $scope.temp = e.data.main.temp;
                $scope.pressure = e.data.main.pressure;
                $scope.humidity = e.data.main.humidity;
                $scope.temp_min = e.data.main.temp_min;
                $scope.temp_max = e.data.main.temp_max;
                $scope.ville = e.data.name;
                
                weatherService.getForecast($scope.city).then(function (e) {
                    
                    $scope.icon1 = e.data.list[3].weather[0].icon;
                    $scope.date1 = e.data.list[2].dt_txt.split(' ')[0];
                    $scope.pressure1 = e.data.list[3].main.pressure;
                    $scope.humidity1 = e.data.list[3].main.humidity;
                    $scope.temp_min1 = e.data.list[3].main.temp_min;
                    $scope.temp_max1 = e.data.list[3].main.temp_max;
                    
                    $scope.icon2 = e.data.list[11].weather[0].icon;
                    $scope.date2 = e.data.list[10].dt_txt.split(' ')[0];
                    $scope.pressure2 = e.data.list[11].main.pressure;
                    $scope.humidity2 = e.data.list[11].main.humidity;
                    $scope.temp_min2 = e.data.list[11].main.temp_min;
                    $scope.temp_max2 = e.data.list[11].main.temp_max;
                    
                    $scope.icon3 = e.data.list[19].weather[0].icon;
                    $scope.date3 = e.data.list[18].dt_txt.split(' ')[0];
                    $scope.pressure3 = e.data.list[19].main.pressure;
                    $scope.humidity3 = e.data.list[19].main.humidity;
                    $scope.temp_min3 = e.data.list[19].main.temp_min;
                    $scope.temp_max3 = e.data.list[19].main.temp_max;
                    
                    $scope.icon4 = e.data.list[27].weather[0].icon;
                    $scope.date4 = e.data.list[26].dt_txt.split(' ')[0];
                    $scope.pressure4 = e.data.list[27].main.pressure;
                    $scope.humidity4 = e.data.list[27].main.humidity;
                    $scope.temp_min4 = e.data.list[27].main.temp_min;
                    $scope.temp_max4 = e.data.list[27].main.temp_max;
                    
                    $scope.city = " ";
                });
            });
          

        $scope.tbWeather = true;

    };
}
