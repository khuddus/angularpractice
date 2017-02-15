  var mainApp = angular.module("mainApp", ['ngRoute']);
         mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/home', {
               templateUrl: 'pages/home.html',
               controller: 'HomeController'
            }).
           when('/about', {
               templateUrl: 'pages/about.html',
               controller: 'AboutController'
            }).
           when('/post', {
               templateUrl: 'pages/post.html',
               controller: 'PostController'
            }).
           when('/contact', {
               templateUrl: 'pages/contact.html',
               controller: 'ContactController'
            }).
            
            when('/viewStudents', {
               templateUrl: 'viewStudents.htm',
               controller: 'ViewStudentsController'
            }).
            
            otherwise({
               redirectTo: '/home'
            });
         }]);
         
         mainApp.controller('HomeController', function($scope) {
            $scope.message = "This page will be used to display add student form";
         });
         mainApp.controller('AboutController', function($scope) {
            $scope.message = "This page will be used to display add student form";
         });
         
        mainApp.controller('PostController', function($scope) {
            $scope.message = "This page will be used to display add student form";
         });
         
        mainApp.controller('ContactController', function($scope) {
            $scope.message = "This page will be used to display add student form";
         });
         
         mainApp.controller('ViewStudentsController', function($scope) {
            $scope.message = "This page will be used to display all the students";
         });
			
