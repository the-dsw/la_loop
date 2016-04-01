function routes($routeProvider) {
    for (var i = 0; i < 4; i++) {
        $routeProvider.when('/inscription/inscription-' + i, {
            templateUrl: 'views/inscription/inscription-' + i + '.html',
            controller: 'subscribeController'
        });
    }
    $routeProvider
        .when('/', {
            templateUrl: 'views/inscription/inscription-0.html',
            controller: 'subscribeController'
        })
        .when('/index', {
            templateUrl: 'views/index.html',
            controller: 'mainController'
        })
        .when('/parcours', {
            templateUrl: 'views/parcours.html',
            controller: 'parcoursController'
        })
        .when('/weather', {
            templateUrl: 'views/weather.html',
            controller: 'weatherController'
        })
        .when('/fileUpload', {
            templateUrl: "fileUpload.html",
            controller: "fileUploadCtrl"
        })
        .otherwise({
            redirectTo: '/inscription/inscription-0'
        });
}
