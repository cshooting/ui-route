var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('PageTab', {
            abstract: true,
            templateUrl: "template/PageTab.html"
        })
        .state('PageTab.home', {
            url: '/home',
            templateUrl: "./template/home.html"
        })
        .state('PageTab.project', {
            url: '/project',
            templateUrl: "./template/project.html"
        })
});
