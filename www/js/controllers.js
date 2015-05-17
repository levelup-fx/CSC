angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) 
{
  //Required to use parseInt() in expressions
  $scope.parseInt = parseInt;

  // Form data for the login modal
  $scope.loginData = {};

  $scope.kingsheet = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

/*.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})*/
.controller('cardGamesCtrl', function($scope)
{

  $scope.cardgames = 
  [
    { title: 'Bisca', id: 1 },
    { title: 'Bridge', id: 2 },
    { title: 'Casino', id: 3 },
    { title: 'Copas', id: 4 },
    { title: 'King', id: 5 },
    { title: 'Sueca', id: 6 },
    { title: 'Outro', id: 7 }
  ];

})

.controller('totalScoreCtrl', function($scope, $stateParams) 
{

  //When the user enters the number of tricks - convert them to score.
  //When the user clicks on a cell, convert the score back to tricks

  //################################# NO TRICKS #################################

  $scope.calculateP1NoTricksScore = function()
  {
      $scope.kingsheet.p1_notricks = -$scope.kingsheet.p1_notricks * 20;
  }

  $scope.divideP1NoTricksScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_notricks ) && $scope.kingsheet.p1_notricks  != undefined)
      {
        $scope.kingsheet.p1_notricks = -$scope.kingsheet.p1_notricks / 20;
      }
      
  }

  $scope.calculateP2NoTricksScore = function()
  {
      $scope.kingsheet.p2_notricks = -$scope.kingsheet.p2_notricks * 20;
  }

  $scope.divideP2NoTricksScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_notricks) && $scope.kingsheet.p2_notricks != undefined)
      {
        $scope.kingsheet.p2_notricks = -$scope.kingsheet.p2_notricks / 20;
      }
      
  }

  $scope.calculateP3NoTricksScore = function()
  {
      $scope.kingsheet.p3_notricks = -$scope.kingsheet.p3_notricks * 20;
  }

  $scope.divideP3NoTricksScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_notricks) && $scope.kingsheet.p3_notricks != undefined)
      {
        $scope.kingsheet.p3_notricks = -$scope.kingsheet.p3_notricks / 20;
      }
      
  }

  $scope.calculateP4NoTricksScore = function()
  {
      $scope.kingsheet.p4_notricks = -$scope.kingsheet.p4_notricks * 20;
  }

  $scope.divideP4NoTricksScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_notricks) && $scope.kingsheet.p4_notricks != undefined)
      {
        $scope.kingsheet.p4_notricks = -$scope.kingsheet.p4_notricks / 20;
      }
      
  }

  //################################# HEARTS #################################

  $scope.calculateP1HeartsScore = function()
  {
      $scope.kingsheet.p1_hearts = -$scope.kingsheet.p1_hearts * 20;
  }

  $scope.divideP1HeartsScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_hearts) && $scope.kingsheet.p1_hearts != undefined)
      {
        $scope.kingsheet.p1_hearts = -$scope.kingsheet.p1_hearts / 20;
      }
      
  }

  $scope.calculateP2HeartsScore = function()
  {
      $scope.kingsheet.p2_hearts = -$scope.kingsheet.p2_hearts * 20;
  }

  $scope.divideP2HeartsScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_hearts) && $scope.kingsheet.p2_hearts != undefined)
      {
        $scope.kingsheet.p2_hearts = -$scope.kingsheet.p2_hearts / 20;
      }
      
  }

  $scope.calculateP3HeartsScore = function()
  {
      $scope.kingsheet.p3_hearts = -$scope.kingsheet.p3_hearts * 20;
  }

  $scope.divideP3HeartsScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_hearts) && $scope.kingsheet.p3_hearts != undefined)
      {
        $scope.kingsheet.p3_hearts = -$scope.kingsheet.p3_hearts / 20;
      }
      
  }

  $scope.calculateP4HeartsScore = function()
  {
      $scope.kingsheet.p4_hearts = -$scope.kingsheet.p4_hearts * 20;
  }

  $scope.divideP4HeartsScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_hearts) && $scope.kingsheet.p4_hearts != undefined)
      {
        $scope.kingsheet.p4_hearts = -$scope.kingsheet.p4_hearts / 20;
      }
      
  }

  //################################# DAMES #################################

  $scope.calculateP1DamesScore = function()
  {
      $scope.kingsheet.p1_dames = -$scope.kingsheet.p1_dames * 50;
  }

  $scope.divideP1DamesScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_dames) && $scope.kingsheet.p1_dames != undefined)
      {
        $scope.kingsheet.p1_dames = -$scope.kingsheet.p1_dames / 50;
      }
      
  }

  $scope.calculateP2DamesScore = function()
  {
      $scope.kingsheet.p2_dames = -$scope.kingsheet.p2_dames * 50;
  }

  $scope.divideP2DamesScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_dames) && $scope.kingsheet.p2_dames != undefined)
      {
        $scope.kingsheet.p2_dames = -$scope.kingsheet.p2_dames / 50;
      }
      
  }

  $scope.calculateP3DamesScore = function()
  {
      $scope.kingsheet.p3_dames = -$scope.kingsheet.p3_dames * 50;
  }

  $scope.divideP3DamesScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_dames) && $scope.kingsheet.p3_dames != undefined)
      {
        $scope.kingsheet.p3_dames = -$scope.kingsheet.p3_dames / 50;
      }
      
  }

  $scope.calculateP4DamesScore = function()
  {
      $scope.kingsheet.p4_dames = -$scope.kingsheet.p4_dames * 50;
  }

  $scope.divideP4DamesScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_dames) && $scope.kingsheet.p4_dames != undefined)
      {
        $scope.kingsheet.p4_dames = -$scope.kingsheet.p4_dames / 50;
      }
      
  }

  //################################# GENTS #################################

  $scope.calculateP1GentsScore = function()
  {
      $scope.kingsheet.p1_gents = -$scope.kingsheet.p1_gents * 30;
  }

  $scope.divideP1GentsScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_gents) && $scope.kingsheet.p1_gents != undefined)
      {
        $scope.kingsheet.p1_gents = -$scope.kingsheet.p1_gents / 30;
      }
      
  }

  $scope.calculateP2GentsScore = function()
  {
      $scope.kingsheet.p2_gents = -$scope.kingsheet.p2_gents * 30;
  }

  $scope.divideP2GentsScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_gents) && $scope.kingsheet.p2_gents != undefined)
      {
        $scope.kingsheet.p2_gents = -$scope.kingsheet.p2_gents / 30;
      }
      
  }

  $scope.calculateP3GentsScore = function()
  {
      $scope.kingsheet.p3_gents = -$scope.kingsheet.p3_gents * 30;
  }

  $scope.divideP3GentsScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_gents) && $scope.kingsheet.p3_gents != undefined)
      {
        $scope.kingsheet.p3_gents = -$scope.kingsheet.p3_gents / 30;
      }
      
  }

  $scope.calculateP4GentsScore = function()
  {
      $scope.kingsheet.p4_gents = -$scope.kingsheet.p4_gents * 30;
  }

  $scope.divideP4GentsScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_gents) && $scope.kingsheet.p4_gents != undefined)
      {
        $scope.kingsheet.p4_gents = -$scope.kingsheet.p4_gents / 30;
      }
      
  }

    //################################# KING #################################

  $scope.calculateP1KingScore = function()
  {
      $scope.kingsheet.p1_king = -$scope.kingsheet.p1_king * 160;
  }

  $scope.divideP1KingScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_king) && $scope.kingsheet.p1_king != undefined)
      {
        $scope.kingsheet.p1_king = -$scope.kingsheet.p1_king / 160;
      }
      
  }

  $scope.calculateP2KingScore = function()
  {
      $scope.kingsheet.p2_king = -$scope.kingsheet.p2_king * 160;
  }

  $scope.divideP2KingScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_king) && $scope.kingsheet.p2_king != undefined)
      {
        $scope.kingsheet.p2_king = -$scope.kingsheet.p2_king / 160;
      }
      
  }

  $scope.calculateP3KingScore = function()
  {
      $scope.kingsheet.p3_king = -$scope.kingsheet.p3_king * 160;
  }

  $scope.divideP3KingScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_king) && $scope.kingsheet.p3_king != undefined)
      {
        $scope.kingsheet.p3_king = -$scope.kingsheet.p3_king / 160;
      }
      
  }

  $scope.calculateP4KingScore = function()
  {
      $scope.kingsheet.p4_king = -$scope.kingsheet.p4_king * 160;
  }

  $scope.divideP4KingScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_king) && $scope.kingsheet.p4_king != undefined)
      {
        $scope.kingsheet.p4_king = -$scope.kingsheet.p4_king / 160;
      }
      
  }

  //################################# Last TWO #################################

  $scope.calculateP1LastTwoScore = function()
  {
      $scope.kingsheet.p1_last_2 = -$scope.kingsheet.p1_last_2 * 90;
  }

  $scope.divideP1LastTwoScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_last_2) && $scope.kingsheet.p1_last_2 != undefined)
      {
        $scope.kingsheet.p1_last_2 = -$scope.kingsheet.p1_last_2 / 90;
      }
      
  }

  $scope.calculateP2LastTwoScore = function()
  {
      $scope.kingsheet.p2_last_2 = -$scope.kingsheet.p2_last_2 * 90;
  }

  $scope.divideP2LastTwoScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_last_2) && $scope.kingsheet.p2_last_2 != undefined)
      {
        $scope.kingsheet.p2_last_2 = -$scope.kingsheet.p2_last_2 / 90;
      }
      
  }

  $scope.calculateP3LastTwoScore = function()
  {
      $scope.kingsheet.p3_last_2 = -$scope.kingsheet.p3_last_2 * 90;
  }

  $scope.divideP3LastTwoScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_last_2) && $scope.kingsheet.p3_last_2 != undefined)
      {
        $scope.kingsheet.p3_last_2 = -$scope.kingsheet.p3_last_2 / 90;
      }
      
  }

  $scope.calculateP4LastTwoScore = function()
  {
      $scope.kingsheet.p4_last_2 = -$scope.kingsheet.p4_last_2 * 90;
  }

  $scope.divideP4LastTwoScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_last_2) && $scope.kingsheet.p4_last_2 != undefined)
      {
        $scope.kingsheet.p4_last_2 = -$scope.kingsheet.p4_last_2 / 90;
      }   
  }

  //################################# First Auction #################################

  //P1

  $scope.calculateP1FirstAuctionScore = function()
  {
      if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
      {
        $scope.kingsheet.p1_first_auction = $scope.kingsheet.p1_first_auction * 25;
      }
      else
      {
        $scope.kingsheet.p1_first_auction = 325 - ($scope.kingsheet.p1_first_auction * 75);
      }
  }

  $scope.divideP1FirstAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_first_auction) && $scope.kingsheet.p1_first_auction != undefined)
      {
        //$scope.kingsheet.p1_first_auction = $scope.kingsheet.p1_first_auction / 25;
        if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p1_first_auction = $scope.kingsheet.p1_first_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p1_first_auction = (325 - $scope.kingsheet.p1_first_auction) / 75;
        }
      }
  }

  //P2

  $scope.calculateP2FirstAuctionScore = function()
  {
      if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
      {
        $scope.kingsheet.p2_first_auction = $scope.kingsheet.p2_first_auction * 25;
      }
      else
      {
        $scope.kingsheet.p2_first_auction = 325 - ($scope.kingsheet.p2_first_auction * 75);
      }
  }

  $scope.divideP2FirstAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_first_auction) && $scope.kingsheet.p2_first_auction != undefined)
      {
        //$scope.kingsheet.p2_first_auction = $scope.kingsheet.p2_first_auction / 25;
        if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p2_first_auction = $scope.kingsheet.p2_first_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p2_first_auction = (325 - $scope.kingsheet.p2_first_auction) / 75;
        }
      }
  }

  //P3

  $scope.calculateP3FirstAuctionScore = function()
  {
      if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
      {
        $scope.kingsheet.p3_first_auction = $scope.kingsheet.p3_first_auction * 25;
      }
      else
      {
        $scope.kingsheet.p3_first_auction = 325 - ($scope.kingsheet.p3_first_auction * 75);
      }
  }

  $scope.divideP3FirstAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_first_auction) && $scope.kingsheet.p3_first_auction != undefined)
      {
        //$scope.kingsheet.p3_first_auction = $scope.kingsheet.p3_first_auction / 25;
        if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p3_first_auction = $scope.kingsheet.p3_first_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p3_first_auction = (325 - $scope.kingsheet.p3_first_auction) / 75;
        }
      }
  }

  //P4

  $scope.calculateP4FirstAuctionScore = function()
  {
      if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
      {
        $scope.kingsheet.p4_first_auction = $scope.kingsheet.p4_first_auction * 25;
      }
      else
      {
        $scope.kingsheet.p4_first_auction = 325 - ($scope.kingsheet.p4_first_auction * 75);
      }
  }

  $scope.divideP4FirstAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_first_auction) && $scope.kingsheet.p4_first_auction != undefined)
      {
        //$scope.kingsheet.p4_first_auction = $scope.kingsheet.p4_first_auction / 25;
        if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p4_first_auction = $scope.kingsheet.p4_first_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p4_first_auction = (325 - $scope.kingsheet.p4_first_auction) / 75;
        }
      }
  }

  //################################# Second Auction #################################

  //P1

  $scope.calculateP1SecondAuctionScore = function()
  {
      if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
      {
        $scope.kingsheet.p1_second_auction = $scope.kingsheet.p1_second_auction * 25;
      }
      else
      {
        $scope.kingsheet.p1_second_auction = 325 - ($scope.kingsheet.p1_second_auction * 75);
      }
  }

  $scope.divideP1SecondAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_second_auction) && $scope.kingsheet.p1_second_auction != undefined)
      {
        //$scope.kingsheet.p1_second_auction = $scope.kingsheet.p1_second_auction / 25;
        if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p1_second_auction = $scope.kingsheet.p1_second_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p1_second_auction = (325 - $scope.kingsheet.p1_second_auction) / 75;
        }
      }
  }

  //P2

  $scope.calculateP2SecondAuctionScore = function()
  {
      if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
      {
        $scope.kingsheet.p2_second_auction = $scope.kingsheet.p2_second_auction * 25;
      }
      else
      {
        $scope.kingsheet.p2_second_auction = 325 - ($scope.kingsheet.p2_second_auction * 75);
      }
  }

  $scope.divideP2SecondAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_second_auction) && $scope.kingsheet.p2_second_auction != undefined)
      {
        //$scope.kingsheet.p2_second_auction = $scope.kingsheet.p2_second_auction / 25;
        if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p2_second_auction = $scope.kingsheet.p2_second_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p2_second_auction = (325 - $scope.kingsheet.p2_second_auction) / 75;
        }
      }
  }

  //P3

  $scope.calculateP3SecondAuctionScore = function()
  {
      if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
      {
        $scope.kingsheet.p3_second_auction = $scope.kingsheet.p3_second_auction * 25;
      }
      else
      {
        $scope.kingsheet.p3_second_auction = 325 - ($scope.kingsheet.p3_second_auction * 75);
      }
  }

  $scope.divideP3SecondAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_second_auction) && $scope.kingsheet.p3_second_auction != undefined)
      {
        //$scope.kingsheet.p3_second_auction = $scope.kingsheet.p3_second_auction / 25;
        if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p3_second_auction = $scope.kingsheet.p3_second_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p3_second_auction = (325 - $scope.kingsheet.p3_second_auction) / 75;
        }
      }
  }

  //P4

  $scope.calculateP4SecondAuctionScore = function()
  {
      if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
      {
        $scope.kingsheet.p4_second_auction = $scope.kingsheet.p4_second_auction * 25;
      }
      else
      {
        $scope.kingsheet.p4_second_auction = 325 - ($scope.kingsheet.p4_second_auction * 75);
      }
  }

  $scope.divideP4SecondAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_second_auction) && $scope.kingsheet.p4_second_auction != undefined)
      {
        //$scope.kingsheet.p4_second_auction = $scope.kingsheet.p4_second_auction / 25;
        if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p4_second_auction = $scope.kingsheet.p4_second_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p4_second_auction = (325 - $scope.kingsheet.p4_second_auction) / 75;
        }
      }
  }

  //################################# Third Auction #################################

  //P1

  $scope.calculateP1ThirdAuctionScore = function()
  {
      if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
      {
        $scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction * 25;
      }
      else
      {
        $scope.kingsheet.p1_third_auction = 325 - ($scope.kingsheet.p1_third_auction * 75);
      }
  }

  $scope.divideP1ThirdAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_third_auction) && $scope.kingsheet.p1_third_auction != undefined)
      {
        //$scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
        if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p1_third_auction = (325 - $scope.kingsheet.p1_third_auction) / 75;
        }
      }
  }

  //P2

  $scope.calculateP2ThirdAuctionScore = function()
  {
      if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
      {
        $scope.kingsheet.p2_third_auction = $scope.kingsheet.p2_third_auction * 25;
      }
      else
      {
        $scope.kingsheet.p2_third_auction = 325 - ($scope.kingsheet.p2_third_auction * 75);
      }
  }

  $scope.divideP2ThirdAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_third_auction) && $scope.kingsheet.p2_third_auction != undefined)
      {
        //$scope.kingsheet.p2_third_auction = $scope.kingsheet.p2_third_auction / 25;
        if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p2_third_auction = $scope.kingsheet.p2_third_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p2_third_auction = (325 - $scope.kingsheet.p2_third_auction) / 75;
        }
      }
  }

  //P3

  $scope.calculateP3ThirdAuctionScore = function()
  {
      if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
      {
        $scope.kingsheet.p3_third_auction = $scope.kingsheet.p3_third_auction * 25;
      }
      else
      {
        $scope.kingsheet.p3_third_auction = 325 - ($scope.kingsheet.p3_third_auction * 75);
      }
  }

  $scope.divideP3ThirdAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_third_auction) && $scope.kingsheet.p3_third_auction != undefined)
      {
        //$scope.kingsheet.p3_third_auction = $scope.kingsheet.p3_third_auction / 25;
        if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p3_third_auction = $scope.kingsheet.p3_third_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p3_third_auction = (325 - $scope.kingsheet.p3_third_auction) / 75;
        }
      }
  }

  //P4

  $scope.calculateP4ThirdAuctionScore = function()
  {
      if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
      {
        $scope.kingsheet.p4_third_auction = $scope.kingsheet.p4_third_auction * 25;
      }
      else
      {
        $scope.kingsheet.p4_third_auction = 325 - ($scope.kingsheet.p4_third_auction * 75);
      }
  }

  $scope.divideP4ThirdAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_third_auction) && $scope.kingsheet.p4_third_auction != undefined)
      {
        //$scope.kingsheet.p4_third_auction = $scope.kingsheet.p4_third_auction / 25;
        if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p4_third_auction = $scope.kingsheet.p4_third_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p4_third_auction = (325 - $scope.kingsheet.p4_third_auction) / 75;
        }
      }
  }

  //################################# Fourth Auction #################################

  //P1

  $scope.calculateP1FourthAuctionScore = function()
  {
      if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
      {
        $scope.kingsheet.p1_fourth_auction = $scope.kingsheet.p1_fourth_auction * 25;
      }
      else
      {
        $scope.kingsheet.p1_fourth_auction = 325 - ($scope.kingsheet.p1_fourth_auction * 75);
      }
  }

  $scope.divideP1FourthAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p1_fourth_auction) && $scope.kingsheet.p1_fourth_auction != undefined)
      {
        //$scope.kingsheet.p1_fourth_auction = $scope.kingsheet.p1_fourth_auction / 25;
        if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p1_fourth_auction = $scope.kingsheet.p1_fourth_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p1_fourth_auction = (325 - $scope.kingsheet.p1_fourth_auction) / 75;
        }
      }
  }

  //P2

  $scope.calculateP2FourthAuctionScore = function()
  {
      if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
      {
        $scope.kingsheet.p2_fourth_auction = $scope.kingsheet.p2_fourth_auction * 25;
      }
      else
      {
        $scope.kingsheet.p2_fourth_auction = 325 - ($scope.kingsheet.p2_fourth_auction * 75);
      }
  }

  $scope.divideP2FourthAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p2_fourth_auction) && $scope.kingsheet.p2_fourth_auction != undefined)
      {
        //$scope.kingsheet.p2_fourth_auction = $scope.kingsheet.p2_fourth_auction / 25;
        if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p2_fourth_auction = $scope.kingsheet.p2_fourth_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p2_fourth_auction = (325 - $scope.kingsheet.p2_fourth_auction) / 75;
        }
      }
  }

  //P3

  $scope.calculateP3FourthAuctionScore = function()
  {
      if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
      {
        $scope.kingsheet.p3_fourth_auction = $scope.kingsheet.p3_fourth_auction * 25;
      }
      else
      {
        $scope.kingsheet.p3_fourth_auction = 325 - ($scope.kingsheet.p3_fourth_auction * 75);
      }
  }

  $scope.divideP3FourthAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p3_fourth_auction) && $scope.kingsheet.p3_fourth_auction != undefined)
      {
        //$scope.kingsheet.p3_fourth_auction = $scope.kingsheet.p3_fourth_auction / 25;
        if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p3_fourth_auction = $scope.kingsheet.p3_fourth_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p3_fourth_auction = (325 - $scope.kingsheet.p3_fourth_auction) / 75;
        }
      }
  }

  //P4

  $scope.calculateP4FourthAuctionScore = function()
  {
      if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
      {
        $scope.kingsheet.p4_fourth_auction = $scope.kingsheet.p4_fourth_auction * 25;
      }
      else
      {
        $scope.kingsheet.p4_fourth_auction = 325 - ($scope.kingsheet.p4_fourth_auction * 75);
      }
  }

  $scope.divideP4FourthAuctionScore = function()
  {
      if(!isNaN($scope.kingsheet.p4_fourth_auction) && $scope.kingsheet.p4_fourth_auction != undefined)
      {
        //$scope.kingsheet.p4_fourth_auction = $scope.kingsheet.p4_fourth_auction / 25;
        if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet.p4_fourth_auction = $scope.kingsheet.p4_fourth_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet.p4_fourth_auction = (325 - $scope.kingsheet.p4_fourth_auction) / 75;
        }
      }
  }

  //Calculate Totals for each game

  $scope.calculateNoTricksTotal = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_notricks_score = $scope.kingsheet.p1_notricks,
        p2_notricks_score = $scope.kingsheet.p2_notricks,
        p3_notricks_score = $scope.kingsheet.p3_notricks,
        p4_notricks_score = $scope.kingsheet.p4_notricks,
        notricks_total = 0;

        if(p1_notricks_score != undefined)
        {
          if(!isNaN(p1_notricks_score))
          {
            notricks_total += p1_notricks_score;
          }
        }
        
        if(p2_notricks_score != undefined)
        {
          if(!isNaN(p2_notricks_score))
          {
            notricks_total += p2_notricks_score;
          }
        }

        if(p3_notricks_score != undefined)
        {
          if(!isNaN(p3_notricks_score))
          {
            notricks_total += p3_notricks_score;
          }
        }

        if(p4_notricks_score != undefined)
        {
          if(!isNaN(p4_notricks_score))
          {
            notricks_total += p4_notricks_score;
          }
        }

    $scope.kingsheet.notricks_total = notricks_total;
  }

  $scope.calculateHeartsTotal = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_hearts_score = $scope.kingsheet.p1_hearts,
        p2_hearts_score = $scope.kingsheet.p2_hearts,
        p3_hearts_score = $scope.kingsheet.p3_hearts,
        p4_hearts_score = $scope.kingsheet.p4_hearts,
        hearts_total = 0;

        if(p1_hearts_score != undefined)
        {
          if(!isNaN(p1_hearts_score))
          {
            hearts_total += p1_hearts_score;
          }
        }
        
        if(p2_hearts_score != undefined)
        {
          if(!isNaN(p2_hearts_score))
          {
            hearts_total += p2_hearts_score;
          }
        }

        if(p3_hearts_score != undefined)
        {
          if(!isNaN(p3_hearts_score))
          {
            hearts_total += p3_hearts_score;
          }
        }

        if(p4_hearts_score != undefined)
        {
          if(!isNaN(p4_hearts_score))
          {
            hearts_total += p4_hearts_score;
          }
        }

    $scope.kingsheet.hearts_total = hearts_total;
  }

  $scope.calculateDamesTotal = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_dames_score = $scope.kingsheet.p1_dames,
        p2_dames_score = $scope.kingsheet.p2_dames,
        p3_dames_score = $scope.kingsheet.p3_dames,
        p4_dames_score = $scope.kingsheet.p4_dames,
        dames_total = 0;

        if(p1_dames_score != undefined)
        {
          if(!isNaN(p1_dames_score))
          {
            dames_total += p1_dames_score;
          }
        }
        
        if(p2_dames_score != undefined)
        {
          if(!isNaN(p2_dames_score))
          {
            dames_total += p2_dames_score;
          }
        }

        if(p3_dames_score != undefined)
        {
          if(!isNaN(p3_dames_score))
          {
            dames_total += p3_dames_score;
          }
        }

        if(p4_dames_score != undefined)
        {
          if(!isNaN(p4_dames_score))
          {
            dames_total += p4_dames_score;
          }
        }

    $scope.kingsheet.dames_total = dames_total;
  }

  $scope.calculateGentsTotal = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_gents_score = $scope.kingsheet.p1_gents,
        p2_gents_score = $scope.kingsheet.p2_gents,
        p3_gents_score = $scope.kingsheet.p3_gents,
        p4_gents_score = $scope.kingsheet.p4_gents,
        gents_total = 0;

        if(p1_gents_score != undefined)
        {
          if(!isNaN(p1_gents_score))
          {
            gents_total += p1_gents_score;
          }
        }
        
        if(p2_gents_score != undefined)
        {
          if(!isNaN(p2_gents_score))
          {
            gents_total += p2_gents_score;
          }
        }

        if(p3_gents_score != undefined)
        {
          if(!isNaN(p3_gents_score))
          {
            gents_total += p3_gents_score;
          }
        }

        if(p4_gents_score != undefined)
        {
          if(!isNaN(p4_gents_score))
          {
            gents_total += p4_gents_score;
          }
        }

    $scope.kingsheet.gents_total = gents_total;
  }

  $scope.calculateKingTotal = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_king_score = $scope.kingsheet.p1_king,
        p2_king_score = $scope.kingsheet.p2_king,
        p3_king_score = $scope.kingsheet.p3_king,
        p4_king_score = $scope.kingsheet.p4_king,
        king_total = 0;

        if(p1_king_score != undefined)
        {
          if(!isNaN(p1_king_score))
          {
            king_total += p1_king_score;
          }
        }
        
        if(p2_king_score != undefined)
        {
          if(!isNaN(p2_king_score))
          {
            king_total += p2_king_score;
          }
        }

        if(p3_king_score != undefined)
        {
          if(!isNaN(p3_king_score))
          {
            king_total += p3_king_score;
          }
        }

        if(p4_king_score != undefined)
        {
          if(!isNaN(p4_king_score))
          {
            king_total += p4_king_score;
          }
        }

    $scope.kingsheet.king_total = king_total;
  }

  $scope.calculateLast2Total = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_last_2_score = $scope.kingsheet.p1_last_2,
        p2_last_2_score = $scope.kingsheet.p2_last_2,
        p3_last_2_score = $scope.kingsheet.p3_last_2,
        p4_last_2_score = $scope.kingsheet.p4_last_2,
        last_2_total = 0;

        if(p1_last_2_score != undefined)
        {
          if(!isNaN(p1_last_2_score))
          {
            last_2_total += p1_last_2_score;
          }
        }
        
        if(p2_last_2_score != undefined)
        {
          if(!isNaN(p2_last_2_score))
          {
            last_2_total += p2_last_2_score;
          }
        }

        if(p3_last_2_score != undefined)
        {
          if(!isNaN(p3_last_2_score))
          {
            last_2_total += p3_last_2_score;
          }
        }

        if(p4_last_2_score != undefined)
        {
          if(!isNaN(p4_last_2_score))
          {
            last_2_total += p4_last_2_score;
          }
        }

    $scope.kingsheet.last_2_total = last_2_total;
  }

  $scope.calculateFirstAuctionTotal = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_first_auction_score = $scope.kingsheet.p1_first_auction,
        p2_first_auction_score = $scope.kingsheet.p2_first_auction,
        p3_first_auction_score = $scope.kingsheet.p3_first_auction,
        p4_first_auction_score = $scope.kingsheet.p4_first_auction,
        first_auction_total = 0;

        if(p1_first_auction_score != undefined)
        {
          if(!isNaN(p1_first_auction_score))
          {
            first_auction_total += p1_first_auction_score;
          }
        }
        
        if(p2_first_auction_score != undefined)
        {
          if(!isNaN(p2_first_auction_score))
          {
            first_auction_total += p2_first_auction_score;
          }
        }

        if(p3_first_auction_score != undefined)
        {
          if(!isNaN(p3_first_auction_score))
          {
            first_auction_total += p3_first_auction_score;
          }
        }

        if(p4_first_auction_score != undefined)
        {
          if(!isNaN(p4_first_auction_score))
          {
            first_auction_total += p4_first_auction_score;
          }
        }

    $scope.kingsheet.first_auction_total = first_auction_total;
  }

  $scope.calculateSecondAuctionTotal = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_second_auction_score = $scope.kingsheet.p1_second_auction,
        p2_second_auction_score = $scope.kingsheet.p2_second_auction,
        p3_second_auction_score = $scope.kingsheet.p3_second_auction,
        p4_second_auction_score = $scope.kingsheet.p4_second_auction,
        second_auction_total = 0;

        if(p1_second_auction_score != undefined)
        {
          if(!isNaN(p1_second_auction_score))
          {
            second_auction_total += p1_second_auction_score;
          }
        }
        
        if(p2_second_auction_score != undefined)
        {
          if(!isNaN(p2_second_auction_score))
          {
            second_auction_total += p2_second_auction_score;
          }
        }

        if(p3_second_auction_score != undefined)
        {
          if(!isNaN(p3_second_auction_score))
          {
            second_auction_total += p3_second_auction_score;
          }
        }

        if(p4_second_auction_score != undefined)
        {
          if(!isNaN(p4_second_auction_score))
          {
            second_auction_total += p4_second_auction_score;
          }
        }

    $scope.kingsheet.second_auction_total = second_auction_total;
  }

  $scope.calculateThirdAuctionTotal = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_third_auction_score = $scope.kingsheet.p1_third_auction,
        p2_third_auction_score = $scope.kingsheet.p2_third_auction,
        p3_third_auction_score = $scope.kingsheet.p3_third_auction,
        p4_third_auction_score = $scope.kingsheet.p4_third_auction,
        third_auction_total = 0;

        if(p1_third_auction_score != undefined)
        {
          if(!isNaN(p1_third_auction_score))
          {
            third_auction_total += p1_third_auction_score;
          }
        }
        
        if(p2_third_auction_score != undefined)
        {
          if(!isNaN(p2_third_auction_score))
          {
            third_auction_total += p2_third_auction_score;
          }
        }

        if(p3_third_auction_score != undefined)
        {
          if(!isNaN(p3_third_auction_score))
          {
            third_auction_total += p3_third_auction_score;
          }
        }

        if(p4_third_auction_score != undefined)
        {
          if(!isNaN(p4_third_auction_score))
          {
            third_auction_total += p4_third_auction_score;
          }
        }

    $scope.kingsheet.third_auction_total = third_auction_total;
  }

  $scope.calculateFourthAuctionTotal = function()
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_fourth_auction_score = $scope.kingsheet.p1_fourth_auction,
        p2_fourth_auction_score = $scope.kingsheet.p2_fourth_auction,
        p3_fourth_auction_score = $scope.kingsheet.p3_fourth_auction,
        p4_fourth_auction_score = $scope.kingsheet.p4_fourth_auction,
        fourth_auction_total = 0;

        if(p1_fourth_auction_score != undefined)
        {
          if(!isNaN(p1_fourth_auction_score))
          {
            fourth_auction_total += p1_fourth_auction_score;
          }
        }
        
        if(p2_fourth_auction_score != undefined)
        {
          if(!isNaN(p2_fourth_auction_score))
          {
            fourth_auction_total += p2_fourth_auction_score;
          }
        }

        if(p3_fourth_auction_score != undefined)
        {
          if(!isNaN(p3_fourth_auction_score))
          {
            fourth_auction_total += p3_fourth_auction_score;
          }
        }

        if(p4_fourth_auction_score != undefined)
        {
          if(!isNaN(p4_fourth_auction_score))
          {
            fourth_auction_total += p4_fourth_auction_score;
          }
        }

    $scope.kingsheet.fourth_auction_total = fourth_auction_total;
  }


  //Totals watch - When each value is updated - re-calculate the totals

  $scope.$watch('kingsheet.p1_notricks', function() 
  {
      var total = 0;

      $scope.calculateNoTricksTotal();

      if($scope.kingsheet.p1_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_notricks))
        {  
          total += $scope.kingsheet.p1_notricks;
        }
      }

      if($scope.kingsheet.p1_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_hearts))
        {
          total += $scope.kingsheet.p1_hearts;
        }
      }

      if($scope.kingsheet.p1_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_dames))
        {
          total += $scope.kingsheet.p1_dames;
        }
      }

      if($scope.kingsheet.p1_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_gents))
        {
          total += $scope.kingsheet.p1_gents;
        }
      }

      if($scope.kingsheet.p1_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_king))
        {
          total += $scope.kingsheet.p1_king;
        }
      }

      if($scope.kingsheet.p1_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_last_2))
        {
          total += $scope.kingsheet.p1_last_2;
        }
      }

      $scope.kingsheet.p1_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p1_hearts', function() 
  {
      var total = 0;

      $scope.calculateHeartsTotal();

      if($scope.kingsheet.p4_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_notricks))
        {  
          total += $scope.kingsheet.p4_notricks;
        }
      }

      if($scope.kingsheet.p4_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_hearts))
        {
          total += $scope.kingsheet.p4_hearts;
        }
      }

      if($scope.kingsheet.p4_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_dames))
        {
          total += $scope.kingsheet.p4_dames;
        }
      }

      if($scope.kingsheet.p4_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_gents))
        {
          total += $scope.kingsheet.p4_gents;
        }
      }

      if($scope.kingsheet.p4_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_king))
        {
          total += $scope.kingsheet.p4_king;
        }
      }

      if($scope.kingsheet.p4_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_last_2))
        {
          total += $scope.kingsheet.p4_last_2;
        }
      }

      $scope.kingsheet.p4_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p1_dames', function() 
  {
      var total = 0;

      $scope.calculateDamesTotal();

      if($scope.kingsheet.p1_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_notricks))
        {  
          total += $scope.kingsheet.p1_notricks;
        }
      }

      if($scope.kingsheet.p1_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_hearts))
        {
          total += $scope.kingsheet.p1_hearts;
        }
      }

      if($scope.kingsheet.p1_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_dames))
        {
          total += $scope.kingsheet.p1_dames;
        }
      }

      if($scope.kingsheet.p1_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_gents))
        {
          total += $scope.kingsheet.p1_gents;
        }
      }

      if($scope.kingsheet.p1_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_king))
        {
          total += $scope.kingsheet.p1_king;
        }
      }

      if($scope.kingsheet.p1_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_last_2))
        {
          total += $scope.kingsheet.p1_last_2;
        }
      }

      $scope.kingsheet.p1_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p1_gents', function() 
  {
      var total = 0;

      $scope.calculateGentsTotal();

      if($scope.kingsheet.p1_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_notricks))
        {  
          total += $scope.kingsheet.p1_notricks;
        }
      }

      if($scope.kingsheet.p1_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_hearts))
        {
          total += $scope.kingsheet.p1_hearts;
        }
      }

      if($scope.kingsheet.p1_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_dames))
        {
          total += $scope.kingsheet.p1_dames;
        }
      }

      if($scope.kingsheet.p1_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_gents))
        {
          total += $scope.kingsheet.p1_gents;
        }
      }

      if($scope.kingsheet.p1_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_king))
        {
          total += $scope.kingsheet.p1_king;
        }
      }

      if($scope.kingsheet.p1_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_last_2))
        {
          total += $scope.kingsheet.p1_last_2;
        }
      }

      $scope.kingsheet.p1_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p1_king', function() 
  {
      var total = 0;

      $scope.calculateKingTotal();

      if($scope.kingsheet.p1_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_notricks))
        {  
          total += $scope.kingsheet.p1_notricks;
        }
      }

      if($scope.kingsheet.p1_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_hearts))
        {
          total += $scope.kingsheet.p1_hearts;
        }
      }

      if($scope.kingsheet.p1_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_dames))
        {
          total += $scope.kingsheet.p1_dames;
        }
      }

      if($scope.kingsheet.p1_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_gents))
        {
          total += $scope.kingsheet.p1_gents;
        }
      }

      if($scope.kingsheet.p1_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_king))
        {
          total += $scope.kingsheet.p1_king;
        }
      }

      if($scope.kingsheet.p1_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_last_2))
        {
          total += $scope.kingsheet.p1_last_2;
        }
      }

      $scope.kingsheet.p1_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p1_last_2', function() 
  {
      var total = 0;

      $scope.calculateLast2Total();

      if($scope.kingsheet.p1_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_notricks))
        {  
          total += $scope.kingsheet.p1_notricks;
        }
      }

      if($scope.kingsheet.p1_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_hearts))
        {
          total += $scope.kingsheet.p1_hearts;
        }
      }

      if($scope.kingsheet.p1_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_dames))
        {
          total += $scope.kingsheet.p1_dames;
        }
      }

      if($scope.kingsheet.p1_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_gents))
        {
          total += $scope.kingsheet.p1_gents;
        }
      }

      if($scope.kingsheet.p1_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_king))
        {
          total += $scope.kingsheet.p1_king;
        }
      }

      if($scope.kingsheet.p1_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_last_2))
        {
          total += $scope.kingsheet.p1_last_2;
        }
      }

      $scope.kingsheet.p1_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });


  $scope.$watch('kingsheet.p2_notricks', function() 
  {
      var total = 0;

      $scope.calculateNoTricksTotal();

      if($scope.kingsheet.p2_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_notricks))
        {  
          total += $scope.kingsheet.p2_notricks;
        }
      }

      if($scope.kingsheet.p2_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_hearts))
        {
          total += $scope.kingsheet.p2_hearts;
        }
      }

      if($scope.kingsheet.p2_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_dames))
        {
          total += $scope.kingsheet.p2_dames;
        }
      }

      if($scope.kingsheet.p2_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_gents))
        {
          total += $scope.kingsheet.p2_gents;
        }
      }

      if($scope.kingsheet.p2_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_king))
        {
          total += $scope.kingsheet.p2_king;
        }
      }

      if($scope.kingsheet.p2_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_last_2))
        {
          total += $scope.kingsheet.p2_last_2;
        }
      }

      $scope.kingsheet.p2_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p2_hearts', function() 
  {
      var total = 0;

      $scope.calculateHeartsTotal();

      if($scope.kingsheet.p2_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_notricks))
        {  
          total += $scope.kingsheet.p2_notricks;
        }
      }

      if($scope.kingsheet.p2_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_hearts))
        {
          total += $scope.kingsheet.p2_hearts;
        }
      }

      if($scope.kingsheet.p2_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_dames))
        {
          total += $scope.kingsheet.p2_dames;
        }
      }

      if($scope.kingsheet.p2_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_gents))
        {
          total += $scope.kingsheet.p2_gents;
        }
      }

      if($scope.kingsheet.p2_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_king))
        {
          total += $scope.kingsheet.p2_king;
        }
      }

      if($scope.kingsheet.p2_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_last_2))
        {
          total += $scope.kingsheet.p2_last_2;
        }
      }

      $scope.kingsheet.p2_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p2_dames', function() 
  {
      var total = 0;

      $scope.calculateDamesTotal();

      if($scope.kingsheet.p2_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_notricks))
        {  
          total += $scope.kingsheet.p2_notricks;
        }
      }

      if($scope.kingsheet.p2_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_hearts))
        {
          total += $scope.kingsheet.p2_hearts;
        }
      }

      if($scope.kingsheet.p2_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_dames))
        {
          total += $scope.kingsheet.p2_dames;
        }
      }

      if($scope.kingsheet.p2_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_gents))
        {
          total += $scope.kingsheet.p2_gents;
        }
      }

      if($scope.kingsheet.p2_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_king))
        {
          total += $scope.kingsheet.p2_king;
        }
      }

      if($scope.kingsheet.p2_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_last_2))
        {
          total += $scope.kingsheet.p2_last_2;
        }
      }

      $scope.kingsheet.p2_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p2_gents', function() 
  {
      var total = 0;

      $scope.calculateGentsTotal();

      if($scope.kingsheet.p2_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_notricks))
        {  
          total += $scope.kingsheet.p2_notricks;
        }
      }

      if($scope.kingsheet.p2_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_hearts))
        {
          total += $scope.kingsheet.p2_hearts;
        }
      }

      if($scope.kingsheet.p2_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_dames))
        {
          total += $scope.kingsheet.p2_dames;
        }
      }

      if($scope.kingsheet.p2_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_gents))
        {
          total += $scope.kingsheet.p2_gents;
        }
      }

      if($scope.kingsheet.p2_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_king))
        {
          total += $scope.kingsheet.p2_king;
        }
      }

      if($scope.kingsheet.p2_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_last_2))
        {
          total += $scope.kingsheet.p2_last_2;
        }
      }

      $scope.kingsheet.p2_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p2_king', function() 
  {
      var total = 0;

      $scope.calculateKingTotal();

      if($scope.kingsheet.p2_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_notricks))
        {  
          total += $scope.kingsheet.p2_notricks;
        }
      }

      if($scope.kingsheet.p2_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_hearts))
        {
          total += $scope.kingsheet.p2_hearts;
        }
      }

      if($scope.kingsheet.p2_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_dames))
        {
          total += $scope.kingsheet.p2_dames;
        }
      }

      if($scope.kingsheet.p2_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_gents))
        {
          total += $scope.kingsheet.p2_gents;
        }
      }

      if($scope.kingsheet.p2_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_king))
        {
          total += $scope.kingsheet.p2_king;
        }
      }

      if($scope.kingsheet.p2_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_last_2))
        {
          total += $scope.kingsheet.p2_last_2;
        }
      }

      $scope.kingsheet.p2_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p2_last_2', function() 
  {
      var total = 0;

      $scope.calculateLast2Total();

      if($scope.kingsheet.p2_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_notricks))
        {  
          total += $scope.kingsheet.p2_notricks;
        }
      }

      if($scope.kingsheet.p2_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_hearts))
        {
          total += $scope.kingsheet.p2_hearts;
        }
      }

      if($scope.kingsheet.p2_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_dames))
        {
          total += $scope.kingsheet.p2_dames;
        }
      }

      if($scope.kingsheet.p2_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_gents))
        {
          total += $scope.kingsheet.p2_gents;
        }
      }

      if($scope.kingsheet.p2_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_king))
        {
          total += $scope.kingsheet.p2_king;
        }
      }

      if($scope.kingsheet.p2_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_last_2))
        {
          total += $scope.kingsheet.p2_last_2;
        }
      }

      $scope.kingsheet.p2_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p3_notricks', function() 
  {
      var total = 0;

      $scope.calculateNoTricksTotal();

      if($scope.kingsheet.p3_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_notricks))
        {  
          total += $scope.kingsheet.p3_notricks;
        }
      }

      if($scope.kingsheet.p3_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_hearts))
        {
          total += $scope.kingsheet.p3_hearts;
        }
      }

      if($scope.kingsheet.p3_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_dames))
        {
          total += $scope.kingsheet.p3_dames;
        }
      }

      if($scope.kingsheet.p3_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_gents))
        {
          total += $scope.kingsheet.p3_gents;
        }
      }

      if($scope.kingsheet.p3_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_king))
        {
          total += $scope.kingsheet.p3_king;
        }
      }

      if($scope.kingsheet.p3_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_last_2))
        {
          total += $scope.kingsheet.p3_last_2;
        }
      }

      $scope.kingsheet.p3_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p3_hearts', function() 
  {
      var total = 0;

      $scope.calculateHeartsTotal();

      if($scope.kingsheet.p3_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_notricks))
        {  
          total += $scope.kingsheet.p3_notricks;
        }
      }

      if($scope.kingsheet.p3_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_hearts))
        {
          total += $scope.kingsheet.p3_hearts;
        }
      }

      if($scope.kingsheet.p3_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_dames))
        {
          total += $scope.kingsheet.p3_dames;
        }
      }

      if($scope.kingsheet.p3_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_gents))
        {
          total += $scope.kingsheet.p3_gents;
        }
      }

      if($scope.kingsheet.p3_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_king))
        {
          total += $scope.kingsheet.p3_king;
        }
      }

      if($scope.kingsheet.p3_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_last_2))
        {
          total += $scope.kingsheet.p3_last_2;
        }
      }

      $scope.kingsheet.p3_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p3_dames', function() 
  {
      var total = 0;

      $scope.calculateDamesTotal();

      if($scope.kingsheet.p3_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_notricks))
        {  
          total += $scope.kingsheet.p3_notricks;
        }
      }

      if($scope.kingsheet.p3_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_hearts))
        {
          total += $scope.kingsheet.p3_hearts;
        }
      }

      if($scope.kingsheet.p3_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_dames))
        {
          total += $scope.kingsheet.p3_dames;
        }
      }

      if($scope.kingsheet.p3_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_gents))
        {
          total += $scope.kingsheet.p3_gents;
        }
      }

      if($scope.kingsheet.p3_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_king))
        {
          total += $scope.kingsheet.p3_king;
        }
      }

      if($scope.kingsheet.p3_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_last_2))
        {
          total += $scope.kingsheet.p3_last_2;
        }
      }

      $scope.kingsheet.p3_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p3_gents', function() 
  {
      var total = 0;

      $scope.calculateGentsTotal();

      if($scope.kingsheet.p3_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_notricks))
        {  
          total += $scope.kingsheet.p3_notricks;
        }
      }

      if($scope.kingsheet.p3_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_hearts))
        {
          total += $scope.kingsheet.p3_hearts;
        }
      }

      if($scope.kingsheet.p3_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_dames))
        {
          total += $scope.kingsheet.p3_dames;
        }
      }

      if($scope.kingsheet.p3_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_gents))
        {
          total += $scope.kingsheet.p3_gents;
        }
      }

      if($scope.kingsheet.p3_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_king))
        {
          total += $scope.kingsheet.p3_king;
        }
      }

      if($scope.kingsheet.p3_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_last_2))
        {
          total += $scope.kingsheet.p3_last_2;
        }
      }

      $scope.kingsheet.p3_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p3_king', function() 
  {
      var total = 0;

      $scope.calculateKingTotal();

      if($scope.kingsheet.p3_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_notricks))
        {  
          total += $scope.kingsheet.p3_notricks;
        }
      }

      if($scope.kingsheet.p3_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_hearts))
        {
          total += $scope.kingsheet.p3_hearts;
        }
      }

      if($scope.kingsheet.p3_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_dames))
        {
          total += $scope.kingsheet.p3_dames;
        }
      }

      if($scope.kingsheet.p3_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_gents))
        {
          total += $scope.kingsheet.p3_gents;
        }
      }

      if($scope.kingsheet.p3_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_king))
        {
          total += $scope.kingsheet.p3_king;
        }
      }

      if($scope.kingsheet.p3_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_last_2))
        {
          total += $scope.kingsheet.p3_last_2;
        }
      }

      $scope.kingsheet.p3_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p3_last_2', function() 
  {
      var total = 0;

      $scope.calculateLast2Total();

      if($scope.kingsheet.p3_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_notricks))
        {  
          total += $scope.kingsheet.p3_notricks;
        }
      }

      if($scope.kingsheet.p3_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_hearts))
        {
          total += $scope.kingsheet.p3_hearts;
        }
      }

      if($scope.kingsheet.p3_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_dames))
        {
          total += $scope.kingsheet.p3_dames;
        }
      }

      if($scope.kingsheet.p3_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_gents))
        {
          total += $scope.kingsheet.p3_gents;
        }
      }

      if($scope.kingsheet.p3_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_king))
        {
          total += $scope.kingsheet.p3_king;
        }
      }

      if($scope.kingsheet.p3_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_last_2))
        {
          total += $scope.kingsheet.p3_last_2;
        }
      }

      $scope.kingsheet.p3_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p4_notricks', function() 
  {
      var total = 0;

      $scope.calculateNoTricksTotal();

      if($scope.kingsheet.p4_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_notricks))
        {  
          total += $scope.kingsheet.p4_notricks;
        }
      }

      if($scope.kingsheet.p4_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_hearts))
        {
          total += $scope.kingsheet.p4_hearts;
        }
      }

      if($scope.kingsheet.p4_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_dames))
        {
          total += $scope.kingsheet.p4_dames;
        }
      }

      if($scope.kingsheet.p4_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_gents))
        {
          total += $scope.kingsheet.p4_gents;
        }
      }

      if($scope.kingsheet.p4_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_king))
        {
          total += $scope.kingsheet.p4_king;
        }
      }

      if($scope.kingsheet.p4_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_last_2))
        {
          total += $scope.kingsheet.p4_last_2;
        }
      }

      $scope.kingsheet.p4_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p4_hearts', function() 
  {
      var total = 0;

      $scope.calculateHeartsTotal();

      if($scope.kingsheet.p4_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_notricks))
        {  
          total += $scope.kingsheet.p4_notricks;
        }
      }

      if($scope.kingsheet.p4_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_hearts))
        {
          total += $scope.kingsheet.p4_hearts;
        }
      }

      if($scope.kingsheet.p4_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_dames))
        {
          total += $scope.kingsheet.p4_dames;
        }
      }

      if($scope.kingsheet.p4_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_gents))
        {
          total += $scope.kingsheet.p4_gents;
        }
      }

      if($scope.kingsheet.p4_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_king))
        {
          total += $scope.kingsheet.p4_king;
        }
      }

      if($scope.kingsheet.p4_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_last_2))
        {
          total += $scope.kingsheet.p4_last_2;
        }
      }

      $scope.kingsheet.p4_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p4_dames', function() 
  {
      var total = 0;

      $scope.calculateDamesTotal();

      if($scope.kingsheet.p4_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_notricks))
        {  
          total += $scope.kingsheet.p4_notricks;
        }
      }

      if($scope.kingsheet.p4_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_hearts))
        {
          total += $scope.kingsheet.p4_hearts;
        }
      }

      if($scope.kingsheet.p4_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_dames))
        {
          total += $scope.kingsheet.p4_dames;
        }
      }

      if($scope.kingsheet.p4_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_gents))
        {
          total += $scope.kingsheet.p4_gents;
        }
      }

      if($scope.kingsheet.p4_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_king))
        {
          total += $scope.kingsheet.p4_king;
        }
      }

      if($scope.kingsheet.p4_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_last_2))
        {
          total += $scope.kingsheet.p4_last_2;
        }
      }

      $scope.kingsheet.p4_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p4_gents', function() 
  {
      var total = 0;

      $scope.calculateGentsTotal();

      if($scope.kingsheet.p4_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_notricks))
        {  
          total += $scope.kingsheet.p4_notricks;
        }
      }

      if($scope.kingsheet.p4_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_hearts))
        {
          total += $scope.kingsheet.p4_hearts;
        }
      }

      if($scope.kingsheet.p4_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_dames))
        {
          total += $scope.kingsheet.p4_dames;
        }
      }

      if($scope.kingsheet.p4_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_gents))
        {
          total += $scope.kingsheet.p4_gents;
        }
      }

      if($scope.kingsheet.p4_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_king))
        {
          total += $scope.kingsheet.p4_king;
        }
      }

      if($scope.kingsheet.p4_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_last_2))
        {
          total += $scope.kingsheet.p4_last_2;
        }
      }

      $scope.kingsheet.p4_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p4_king', function() 
  {
      var total = 0;

      $scope.calculateKingTotal();

      if($scope.kingsheet.p4_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_notricks))
        {  
          total += $scope.kingsheet.p4_notricks;
        }
      }

      if($scope.kingsheet.p4_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_hearts))
        {
          total += $scope.kingsheet.p4_hearts;
        }
      }

      if($scope.kingsheet.p4_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_dames))
        {
          total += $scope.kingsheet.p4_dames;
        }
      }

      if($scope.kingsheet.p4_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_gents))
        {
          total += $scope.kingsheet.p4_gents;
        }
      }

      if($scope.kingsheet.p4_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_king))
        {
          total += $scope.kingsheet.p4_king;
        }
      }

      if($scope.kingsheet.p4_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_last_2))
        {
          total += $scope.kingsheet.p4_last_2;
        }
      }

      $scope.kingsheet.p4_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  $scope.$watch('kingsheet.p4_last_2', function() 
  {
      var total = 0;

      $scope.calculateLast2Total();

      if($scope.kingsheet.p4_notricks != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_notricks))
        {  
          total += $scope.kingsheet.p4_notricks;
        }
      }

      if($scope.kingsheet.p4_hearts != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_hearts))
        {
          total += $scope.kingsheet.p4_hearts;
        }
      }

      if($scope.kingsheet.p4_dames != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_dames))
        {
          total += $scope.kingsheet.p4_dames;
        }
      }

      if($scope.kingsheet.p4_gents != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_gents))
        {
          total += $scope.kingsheet.p4_gents;
        }
      }

      if($scope.kingsheet.p4_king != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_king))
        {
          total += $scope.kingsheet.p4_king;
        }
      }

      if($scope.kingsheet.p4_last_2 != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_last_2))
        {
          total += $scope.kingsheet.p4_last_2;
        }
      }

      $scope.kingsheet.p4_first_total = total;
      $scope.kingsheet.first_totals = $scope.kingsheet.p1_first_total + $scope.kingsheet.p2_first_total + $scope.kingsheet.p3_first_total + $scope.kingsheet.p4_first_total;
   });

  //Auctions
  $scope.$watch('kingsheet.p1_first_auction', function() 
  {
      var total = 0;

      $scope.calculateFirstAuctionTotal();

      if($scope.kingsheet.p1_first_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_first_auction))
        {
          total += $scope.kingsheet.p1_first_auction;
        }
      }

      if($scope.kingsheet.p1_first_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_first_total))
        {
          total += $scope.kingsheet.p1_first_total;
        }
      }

      $scope.kingsheet.p1_first_auction_total = total;
   });

  $scope.$watch('kingsheet.p2_first_auction', function() 
  {
      var total = 0;

      $scope.calculateFirstAuctionTotal();

      if($scope.kingsheet.p2_first_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_first_auction))
        {
          total += $scope.kingsheet.p2_first_auction;
        }
      }

      if($scope.kingsheet.p2_first_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_first_total))
        {
          total += $scope.kingsheet.p2_first_total;
        }
      }

      $scope.kingsheet.p2_first_auction_total = total;
   });

  $scope.$watch('kingsheet.p3_first_auction', function() 
  {
      var total = 0;

      $scope.calculateFirstAuctionTotal();

      if($scope.kingsheet.p3_first_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_first_auction))
        {
          total += $scope.kingsheet.p3_first_auction;
        }
      }

      if($scope.kingsheet.p3_first_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_first_total))
        {
          total += $scope.kingsheet.p3_first_total;
        }
      }

      $scope.kingsheet.p3_first_auction_total = total;
   });

  $scope.$watch('kingsheet.p4_first_auction', function() 
  {
      var total = 0;

      $scope.calculateFirstAuctionTotal();

      if($scope.kingsheet.p4_first_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_first_auction))
        {
          total += $scope.kingsheet.p4_first_auction;
        }
      }

      if($scope.kingsheet.p4_first_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_first_total))
        {
          total += $scope.kingsheet.p4_first_total;
        }
      }

      $scope.kingsheet.p4_first_auction_total = total;
   });

  $scope.$watch('kingsheet.p1_second_auction', function() 
  {
      var total = 0;

      $scope.calculateSecondAuctionTotal();

      if($scope.kingsheet.p1_second_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_second_auction))
        {
          total += $scope.kingsheet.p1_second_auction;
        }
      }

      if($scope.kingsheet.p1_first_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_first_auction_total))
        {
          total += $scope.kingsheet.p1_first_auction_total;
        }
      }

      $scope.kingsheet.p1_second_auction_total = total;
   });

  $scope.$watch('kingsheet.p2_second_auction', function() 
  {
      var total = 0;

      $scope.calculateSecondAuctionTotal();

      if($scope.kingsheet.p2_second_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_second_auction))
        {
          total += $scope.kingsheet.p2_second_auction;
        }
      }

      if($scope.kingsheet.p2_first_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_first_auction_total))
        {
          total += $scope.kingsheet.p2_first_auction_total;
        }
      }

      $scope.kingsheet.p2_second_auction_total = total;
   });

  $scope.$watch('kingsheet.p3_second_auction', function() 
  {
      var total = 0;

      $scope.calculateSecondAuctionTotal();

      if($scope.kingsheet.p3_second_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_second_auction))
        {
          total += $scope.kingsheet.p3_second_auction;
        }
      }

      if($scope.kingsheet.p3_first_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_first_auction_total))
        {
          total += $scope.kingsheet.p3_first_auction_total;
        }
      }

      $scope.kingsheet.p3_second_auction_total = total;
   });

  $scope.$watch('kingsheet.p4_second_auction', function() 
  {
      var total = 0;

      $scope.calculateSecondAuctionTotal();

      if($scope.kingsheet.p4_second_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_second_auction))
        {
          total += $scope.kingsheet.p4_second_auction;
        }
      }

      if($scope.kingsheet.p4_first_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_first_auction_total))
        {
          total += $scope.kingsheet.p4_first_auction_total;
        }
      }

      $scope.kingsheet.p4_second_auction_total = total;
   });

  $scope.$watch('kingsheet.p1_third_auction', function() 
  {
      var total = 0;

      $scope.calculateThirdAuctionTotal();

      if($scope.kingsheet.p1_third_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_third_auction))
        {
          total += $scope.kingsheet.p1_third_auction;
        }
      }

      if($scope.kingsheet.p1_second_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_second_auction_total))
        {
          total += $scope.kingsheet.p1_second_auction_total;
        }
      }

      $scope.kingsheet.p1_third_auction_total = total;
   });

  $scope.$watch('kingsheet.p2_third_auction', function() 
  {
      var total = 0;

      $scope.calculateThirdAuctionTotal();

      if($scope.kingsheet.p2_third_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_third_auction))
        {
          total += $scope.kingsheet.p2_third_auction;
        }
      }

      if($scope.kingsheet.p2_second_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_second_auction_total))
        {
          total += $scope.kingsheet.p2_second_auction_total;
        }
      }

      $scope.kingsheet.p2_third_auction_total = total;
   });

  $scope.$watch('kingsheet.p3_third_auction', function() 
  {
      var total = 0;

      $scope.calculateThirdAuctionTotal();

      if($scope.kingsheet.p3_third_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_third_auction))
        {
          total += $scope.kingsheet.p3_third_auction;
        }
      }

      if($scope.kingsheet.p3_second_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_second_auction_total))
        {
          total += $scope.kingsheet.p3_second_auction_total;
        }
      }

      $scope.kingsheet.p3_third_auction_total = total;
   });

  $scope.$watch('kingsheet.p4_third_auction', function() 
  {
      var total = 0;

      $scope.calculateThirdAuctionTotal();

      if($scope.kingsheet.p4_third_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_third_auction))
        {
          total += $scope.kingsheet.p4_third_auction;
        }
      }

      if($scope.kingsheet.p4_second_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_second_auction_total))
        {
          total += $scope.kingsheet.p4_second_auction_total;
        }
      }

      $scope.kingsheet.p4_third_auction_total = total;
   });

  $scope.$watch('kingsheet.p1_fourth_auction', function() 
  {
      var total = 0;

      $scope.calculateFourthAuctionTotal();

      if($scope.kingsheet.p1_fourth_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_fourth_auction))
        {
          total += $scope.kingsheet.p1_fourth_auction;
        }
      }

      if($scope.kingsheet.p1_third_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p1_third_auction_total))
        {
          total += $scope.kingsheet.p1_third_auction_total;
        }
      }

      $scope.kingsheet.p1_fourth_auction_total = total;
   });

  $scope.$watch('kingsheet.p2_fourth_auction', function() 
  {
      var total = 0;

      $scope.calculateFourthAuctionTotal();

      if($scope.kingsheet.p2_fourth_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_fourth_auction))
        {
          total += $scope.kingsheet.p2_fourth_auction;
        }
      }

      if($scope.kingsheet.p2_third_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p2_third_auction_total))
        {
          total += $scope.kingsheet.p2_third_auction_total;
        }
      }

      $scope.kingsheet.p2_fourth_auction_total = total;
   });

  $scope.$watch('kingsheet.p3_fourth_auction', function() 
  {
      var total = 0;

      $scope.calculateFourthAuctionTotal();

      if($scope.kingsheet.p3_fourth_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_fourth_auction))
        {
          total += $scope.kingsheet.p3_fourth_auction;
        }
      }

      if($scope.kingsheet.p3_third_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p3_third_auction_total))
        {
          total += $scope.kingsheet.p3_third_auction_total;
        }
      }

      $scope.kingsheet.p3_fourth_auction_total = total;
   });

  $scope.$watch('kingsheet.p4_fourth_auction', function() 
  {
      var total = 0;

      $scope.calculateFourthAuctionTotal();

      if($scope.kingsheet.p4_fourth_auction != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_fourth_auction))
        {
          total += $scope.kingsheet.p4_fourth_auction;
        }
      }

      if($scope.kingsheet.p4_third_auction_total != undefined)
      {
        if(!isNaN($scope.kingsheet.p4_third_auction_total))
        {
          total += $scope.kingsheet.p4_third_auction_total;
        }
      }

      $scope.kingsheet.p4_fourth_auction_total = total;
   });

  //Handlers for the auction toggle buttons
  $scope.firstAuctionToggle = function()
  {
    //When the user presses the First Auction toggle button, re-calculate all player's scores for the first auction

    //Player 1

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p1_first_auction) && $scope.kingsheet.p1_first_auction != undefined)
    {
      //$scope.kingsheet.p1_first_auction = $scope.kingsheet.p1_first_auction / 25;
      if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p1_first_auction = (325 - $scope.kingsheet.p1_first_auction) / 75;
        //$scope.kingsheet.p1_first_auction = $scope.kingsheet.p1_first_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p1_first_auction = $scope.kingsheet.p1_first_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
    {
      $scope.kingsheet.p1_first_auction = $scope.kingsheet.p1_first_auction * 25;
    }
    else
    {
      $scope.kingsheet.p1_first_auction = 325 - ($scope.kingsheet.p1_first_auction * 75);
    }

    //Player 2

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p2_first_auction) && $scope.kingsheet.p2_first_auction != undefined)
    {
      //$scope.kingsheet.p2_first_auction = $scope.kingsheet.p2_first_auction / 25;
      if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p2_first_auction = (325 - $scope.kingsheet.p2_first_auction) / 75;
        //$scope.kingsheet.p2_first_auction = $scope.kingsheet.p2_first_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p2_first_auction = $scope.kingsheet.p2_first_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
    {
      $scope.kingsheet.p2_first_auction = $scope.kingsheet.p2_first_auction * 25;
    }
    else
    {
      $scope.kingsheet.p2_first_auction = 325 - ($scope.kingsheet.p2_first_auction * 75);
    }

    //Player 3

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p3_first_auction) && $scope.kingsheet.p3_first_auction != undefined)
    {
      //$scope.kingsheet.p3_first_auction = $scope.kingsheet.p3_first_auction / 25;
      if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p3_first_auction = (325 - $scope.kingsheet.p3_first_auction) / 75;
        //$scope.kingsheet.p3_first_auction = $scope.kingsheet.p3_first_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p3_first_auction = $scope.kingsheet.p3_first_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
    {
      $scope.kingsheet.p3_first_auction = $scope.kingsheet.p3_first_auction * 25;
    }
    else
    {
      $scope.kingsheet.p3_first_auction = 325 - ($scope.kingsheet.p3_first_auction * 75);
    }

    //Player 4

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p4_first_auction) && $scope.kingsheet.p4_first_auction != undefined)
    {
      //$scope.kingsheet.p4_first_auction = $scope.kingsheet.p4_first_auction / 25;
      if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p4_first_auction = (325 - $scope.kingsheet.p4_first_auction) / 75;
        //$scope.kingsheet.p4_first_auction = $scope.kingsheet.p4_first_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p4_first_auction = $scope.kingsheet.p4_first_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.first_auction_toggle == false || $scope.kingsheet.first_auction_toggle == undefined)
    {
      $scope.kingsheet.p4_first_auction = $scope.kingsheet.p4_first_auction * 25;
    }
    else
    {
      $scope.kingsheet.p4_first_auction = 325 - ($scope.kingsheet.p4_first_auction * 75);
    }
  }

  $scope.secondAuctionToggle = function()
  {
    //When the user presses the Second Auction toggle button, re-calculate all player's scores for the second auction

    //Player 1

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p1_second_auction) && $scope.kingsheet.p1_second_auction != undefined)
    {
      //$scope.kingsheet.p1_second_auction = $scope.kingsheet.p1_second_auction / 25;
      if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p1_second_auction = (325 - $scope.kingsheet.p1_second_auction) / 75;
        //$scope.kingsheet.p1_second_auction = $scope.kingsheet.p1_second_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p1_second_auction = $scope.kingsheet.p1_second_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
    {
      $scope.kingsheet.p1_second_auction = $scope.kingsheet.p1_second_auction * 25;
    }
    else
    {
      $scope.kingsheet.p1_second_auction = 325 - ($scope.kingsheet.p1_second_auction * 75);
    }

    //Player 2

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p2_second_auction) && $scope.kingsheet.p2_second_auction != undefined)
    {
      //$scope.kingsheet.p2_second_auction = $scope.kingsheet.p2_second_auction / 25;
      if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p2_second_auction = (325 - $scope.kingsheet.p2_second_auction) / 75;
        //$scope.kingsheet.p2_second_auction = $scope.kingsheet.p2_second_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p2_second_auction = $scope.kingsheet.p2_second_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
    {
      $scope.kingsheet.p2_second_auction = $scope.kingsheet.p2_second_auction * 25;
    }
    else
    {
      $scope.kingsheet.p2_second_auction = 325 - ($scope.kingsheet.p2_second_auction * 75);
    }

    //Player 3

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p3_second_auction) && $scope.kingsheet.p3_second_auction != undefined)
    {
      //$scope.kingsheet.p3_second_auction = $scope.kingsheet.p3_second_auction / 25;
      if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p3_second_auction = (325 - $scope.kingsheet.p3_second_auction) / 75;
        //$scope.kingsheet.p3_second_auction = $scope.kingsheet.p3_second_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p3_second_auction = $scope.kingsheet.p3_second_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
    {
      $scope.kingsheet.p3_second_auction = $scope.kingsheet.p3_second_auction * 25;
    }
    else
    {
      $scope.kingsheet.p3_second_auction = 325 - ($scope.kingsheet.p3_second_auction * 75);
    }

    //Player 4

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p4_second_auction) && $scope.kingsheet.p4_second_auction != undefined)
    {
      //$scope.kingsheet.p4_second_auction = $scope.kingsheet.p4_second_auction / 25;
      if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p4_second_auction = (325 - $scope.kingsheet.p4_second_auction) / 75;
        //$scope.kingsheet.p4_second_auction = $scope.kingsheet.p4_second_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p4_second_auction = $scope.kingsheet.p4_second_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.second_auction_toggle == false || $scope.kingsheet.second_auction_toggle == undefined)
    {
      $scope.kingsheet.p4_second_auction = $scope.kingsheet.p4_second_auction * 25;
    }
    else
    {
      $scope.kingsheet.p4_second_auction = 325 - ($scope.kingsheet.p4_second_auction * 75);
    }
  }

  $scope.thirdAuctionToggle = function()
  {
    //When the user presses the Second Auction toggle button, re-calculate all player's scores for the second auction

    //Player 1

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p1_third_auction) && $scope.kingsheet.p1_third_auction != undefined)
    {
      //$scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
      if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p1_third_auction = (325 - $scope.kingsheet.p1_third_auction) / 75;
        //$scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
    {
      $scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction * 25;
    }
    else
    {
      $scope.kingsheet.p1_third_auction = 325 - ($scope.kingsheet.p1_third_auction * 75);
    }

    //Player 2

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p2_third_auction) && $scope.kingsheet.p2_third_auction != undefined)
    {
      //$scope.kingsheet.p2_third_auction = $scope.kingsheet.p2_third_auction / 25;
      if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p2_third_auction = (325 - $scope.kingsheet.p2_third_auction) / 75;
        //$scope.kingsheet.p2_third_auction = $scope.kingsheet.p2_third_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p2_third_auction = $scope.kingsheet.p2_third_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
    {
      $scope.kingsheet.p2_third_auction = $scope.kingsheet.p2_third_auction * 25;
    }
    else
    {
      $scope.kingsheet.p2_third_auction = 325 - ($scope.kingsheet.p2_third_auction * 75);
    }

    //Player 3

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p3_third_auction) && $scope.kingsheet.p3_third_auction != undefined)
    {
      //$scope.kingsheet.p3_third_auction = $scope.kingsheet.p3_third_auction / 25;
      if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p3_third_auction = (325 - $scope.kingsheet.p3_third_auction) / 75;
        //$scope.kingsheet.p3_third_auction = $scope.kingsheet.p3_third_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p3_third_auction = $scope.kingsheet.p3_third_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
    {
      $scope.kingsheet.p3_third_auction = $scope.kingsheet.p3_third_auction * 25;
    }
    else
    {
      $scope.kingsheet.p3_third_auction = 325 - ($scope.kingsheet.p3_third_auction * 75);
    }

    //Player 4

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p4_third_auction) && $scope.kingsheet.p4_third_auction != undefined)
    {
      //$scope.kingsheet.p4_third_auction = $scope.kingsheet.p4_third_auction / 25;
      if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p4_third_auction = (325 - $scope.kingsheet.p4_third_auction) / 75;
        //$scope.kingsheet.p4_third_auction = $scope.kingsheet.p4_third_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p4_third_auction = $scope.kingsheet.p4_third_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.third_auction_toggle == false || $scope.kingsheet.third_auction_toggle == undefined)
    {
      $scope.kingsheet.p4_third_auction = $scope.kingsheet.p4_third_auction * 25;
    }
    else
    {
      $scope.kingsheet.p4_third_auction = 325 - ($scope.kingsheet.p4_third_auction * 75);
    }
  }

  $scope.fourthAuctionToggle = function()
  {
    //When the user presses the Second Auction toggle button, re-calculate all player's scores for the second auction

    //Player 1

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p1_fourth_auction) && $scope.kingsheet.p1_fourth_auction != undefined)
    {
      //$scope.kingsheet.p1_fourth_auction = $scope.kingsheet.p1_fourth_auction / 25;
      if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p1_fourth_auction = (325 - $scope.kingsheet.p1_fourth_auction) / 75;
        //$scope.kingsheet.p1_fourth_auction = $scope.kingsheet.p1_fourth_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p1_fourth_auction = $scope.kingsheet.p1_fourth_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
    {
      $scope.kingsheet.p1_fourth_auction = $scope.kingsheet.p1_fourth_auction * 25;
    }
    else
    {
      $scope.kingsheet.p1_fourth_auction = 325 - ($scope.kingsheet.p1_fourth_auction * 75);
    }

    //Player 2

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p2_fourth_auction) && $scope.kingsheet.p2_fourth_auction != undefined)
    {
      //$scope.kingsheet.p2_fourth_auction = $scope.kingsheet.p2_fourth_auction / 25;
      if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p2_fourth_auction = (325 - $scope.kingsheet.p2_fourth_auction) / 75;
        //$scope.kingsheet.p2_fourth_auction = $scope.kingsheet.p2_fourth_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p2_fourth_auction = $scope.kingsheet.p2_fourth_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
    {
      $scope.kingsheet.p2_fourth_auction = $scope.kingsheet.p2_fourth_auction * 25;
    }
    else
    {
      $scope.kingsheet.p2_fourth_auction = 325 - ($scope.kingsheet.p2_fourth_auction * 75);
    }

    //Player 3

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p3_fourth_auction) && $scope.kingsheet.p3_fourth_auction != undefined)
    {
      //$scope.kingsheet.p3_fourth_auction = $scope.kingsheet.p3_fourth_auction / 25;
      if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p3_fourth_auction = (325 - $scope.kingsheet.p3_fourth_auction) / 75;
        //$scope.kingsheet.p3_fourth_auction = $scope.kingsheet.p3_fourth_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p3_fourth_auction = $scope.kingsheet.p3_fourth_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
    {
      $scope.kingsheet.p3_fourth_auction = $scope.kingsheet.p3_fourth_auction * 25;
    }
    else
    {
      $scope.kingsheet.p3_fourth_auction = 325 - ($scope.kingsheet.p3_fourth_auction * 75);
    }

    //Player 4

    //Get number of tricks
    if(!isNaN($scope.kingsheet.p4_fourth_auction) && $scope.kingsheet.p4_fourth_auction != undefined)
    {
      //$scope.kingsheet.p4_fourth_auction = $scope.kingsheet.p4_fourth_auction / 25;
      if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
      {
        //console.log('positives divide');
        $scope.kingsheet.p4_fourth_auction = (325 - $scope.kingsheet.p4_fourth_auction) / 75;
        //$scope.kingsheet.p4_fourth_auction = $scope.kingsheet.p4_fourth_auction / 25;
      }
      else
      {
        //console.log('negatives divide');
        $scope.kingsheet.p4_fourth_auction = $scope.kingsheet.p4_fourth_auction / 25;
       
      }
    }

    //Get the new score
    if($scope.kingsheet.fourth_auction_toggle == false || $scope.kingsheet.fourth_auction_toggle == undefined)
    {
      $scope.kingsheet.p4_fourth_auction = $scope.kingsheet.p4_fourth_auction * 25;
    }
    else
    {
      $scope.kingsheet.p4_fourth_auction = 325 - ($scope.kingsheet.p4_fourth_auction * 75);
    }
  }

  $scope.resetKingScores = function()
  {
    var scores, index;

    scores = document.getElementsByTagName('input');

    for (index = 0; index < scores.length; ++index) 
    {
        // deal with inputs[index] element.
        scores[index].value = null;
    }

    $scope.kingsheet.first_totals = null;
  }

})

.controller('kingCtrl', function($scope, $stateParams) {
});
