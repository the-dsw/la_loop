// WHEATER SERVICE
function weatherService($http, userFactory) {
    return {
        getWeather: function (city, apikey) {
                console.log('city :'+city);
                console.log('apikey :'+apikey);
            return $http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+apikey+"&units=metric");
        }
    }
};


   