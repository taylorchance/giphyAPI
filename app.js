var app = angular.module('DemoApp', ['angular-carousel'],)
.controller('DemoCtrl', function($scope, $http, giphyAPIcall) {

    $scope.inputChanged = function(){
		giphyAPIcall.get($scope.query).then(function(response) { 
            console.log('my giphy call! ', response.data.data)
            $scope.gifs = response.data.data;
        },function(error){
        	console.log('api call didnt work');
        });
    };

})


.service('giphyAPIcall', function ($http) {
    this.get = function (query) {
        var result = $http.get("http://api.giphy.com/v1/gifs/search?q="+query+"&api_key=nW5kH08e33troZ0wcdS4ywSLg9KyoIMb&limit=3");
        return result;
    };
});