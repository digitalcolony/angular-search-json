var myApp = angular.module("myApp", []);

myApp.controller("MyController", function MyController($scope, $http) {
  $http.get("js/neil-rogers-show-soundboard.json").then(function(response) {
    $scope.drops = response.data;
  });
});
