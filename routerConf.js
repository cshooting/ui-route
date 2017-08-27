var myApp = angular.module("myApp", ["ui.router"]);
//这里叫做App模块，这将告诉HTML页面这是一个AngularJS作用的页面，并把ui-router注入AngularJS主模块，它的内容由AngularJS引擎来解释。
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