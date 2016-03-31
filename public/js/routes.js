function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'userController'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/inscription', {
            templateUrl: 'views/inscription/inscription.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}
