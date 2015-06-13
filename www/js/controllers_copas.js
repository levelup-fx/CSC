angular.module('starter.controllers', [])

//Do not delete this first controller or the App crashes
.controller('AppCtrl', function($scope, $ionicModal, $timeout) 
{
  //Required to use parseInt() in expressions
  $scope.parseInt = parseInt;

  // Form data for the login modal
  //$scope.loginData = {};

  //This object will be a global object where all ng-models will be accessed
  //E.g.: If there is an element with ng-model="player1_score" then
  //you can access it with $scope.copassheet.player1_score.
  $scope.copassheet = {};

})

.controller('copasCtrl', function($scope, $stateParams) 
{

  //Controller code for Copas goes here

})

