function mainController($scope, $rootScope, userService, userFactory) {
    userService.getUserById(userFactory.datas.id).then(function (e) {
        userFactory.datas = e.data[0];
        $rootScope.navbarplz = true;
        // =============== JS NAV ======================

        $(document).ready(function () {
            $("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
                e.preventDefault();
                $(this).siblings('a.active').removeClass("active");
                $(this).addClass("active");
                var index = $(this).index();
                $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
                $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
            });
        });
    });

  // =============== END JS NAV ======================

}
