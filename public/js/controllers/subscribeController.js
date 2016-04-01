function subscribeController($scope, $rootScope, $location, userService, userFactory) {
    $scope.datas = userFactory.datas;
    $rootScope.navbarplz = false;

    // ========= SEXE ============
    $scope.man = function(){
      $scope.datas.sexe = false;
    }
    $scope.woman = function(){
      $scope.datas.sexe = true;
    }

    // ========= STEP FORM 1,2,3, SUBMIT ==========
    $scope.step = function(e) {
        userFactory.datas = $scope.datas;
        userFactory.current++;
        if (userFactory.current == 4) {
            userService.create($scope.datas);
            var path = '/index';
        } else {
            var path = '/inscription/inscription-' + userFactory.current;
        }
        $location.path(path);
    };
    $scope.stepPrev = function(e) {
        userFactory.datas = $scope.datas;
        userFactory.current--;
        var path = '/inscription/inscription-' + userFactory.current;
        $location.path(path);
    };

    //  ============   Flow   =================
  	$scope.imageStrings = [];
  	$scope.processFiles = function (files) {
  		angular.forEach(files, function (flowFile, i) {
  			var fileReader = new FileReader();
  			fileReader.onload = function (event) {
  				var uri = event.target.result;
  				$scope.imageStrings[i] = uri;
          userFactory.datas.avatar = $scope.imageStrings[0];
  			};
  			fileReader.readAsDataURL(flowFile.file);
  		});
  	};


    // =========== Confirm Password ==========
    $scope.isValidPassword = function(regex) { //isValidPassword('[A-Z]+')
        if ($scope.datas.password !== '') {
            return $scope.datas.password ? !(new RegExp('^.*' + regex + '.*$').test($scope.datas.password)) : false;
        }
    };
    $scope.updatePattern = function () {
        $scope.pattern = new RegExp('^' + $scope.datas.password + '$');
    };
    $scope.testUntouched = function(element) {
        return $(element).hasClass('ng-valid-pattern');
    };
}
