function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/inscription/inscription.html',
            controller: 'subscribeController'
        })
        .otherwise({
            redirectTo: '/'
        });
}