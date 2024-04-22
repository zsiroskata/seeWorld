let app = angular.module("myApp", []);
app.controller("myCrl", function($scope, $http) {
    $scope.currentIndex = 0;
    $http.get("sea.json").then(function(response) {
        $scope.cards = response.data;
        console.log($scope.cards)
    })
});

