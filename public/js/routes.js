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
            templateUrl: 'views/index.html'
        })
        .when('/parcours', {
            templateUrl: 'views/parcours.html'
        })
        .otherwise({
            redirectTo: '/inscription/inscription-0'
        });
}