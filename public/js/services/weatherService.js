// WHEATER SERVICE
function weatherService($http, userFactory) {
    return {
        apikey : "a1763e2ff73afbcfb08b54de766913d2",
        getWeather: function (city) {
            return $http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+this.apikey+"&units=metric");
        },
        getForecast: function (city) {
            return $http.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID="+this.apikey+"&units=metric");
    }
    };
}