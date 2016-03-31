function routes($routeProvider) {
    for (var i = 1; i < 4; i++) {
        $routeProvider.when('/inscription/inscription-' + i, {
            templateUrl: 'views/inscription/inscription-' + i + '.html',
            controller: 'subscribeController'
        });
    }
    $routeProvider
        .when('/', {
            templateUrl: 'views/inscription/inscription-1.html',
            controller: 'subscribeController'
        })
        .otherwise({
            redirectTo: '/inscription/inscription-1'
        });
}