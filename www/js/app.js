// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  /*.state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })*/

  /*.state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })*/
  .state('app.baccarat', {
    url: "/baccarat",
    views: {
      'menuContent': {
        templateUrl: "templates/under_construction.html"
      }
    }
  })

  .state('app.bisca', {
    url: "/bisca",
    views: {
      'menuContent': {
        templateUrl: "templates/under_construction.html"
      }
    }
  })

  .state('app.bridge', {
    url: "/bridge",
    views: {
      'menuContent': {
        templateUrl: "templates/under_construction.html"
      }
    }
  })

  .state('app.canasta', {
    url: "/canasta",
    views: {
      'menuContent': {
        templateUrl: "templates/under_construction.html"
      }
    }
  })

  .state('app.casino', {
    url: "/casino",
    views: {
      'menuContent': {
        templateUrl: "templates/casino.html"
      }
    }
  })

  .state('app.copas', {
    url: "/copas",
    views: {
      'menuContent': {
        templateUrl: "templates/under_construction.html"
      }
    }
  })

  .state('app.king', {
    url: "/king",
    views: {
      'menuContent': {
        templateUrl: "templates/king.html"
      }
    }
  })

  .state('app.sueca', {
    url: "/sueca",
    views: {
      'menuContent': {
        templateUrl: "templates/under_construction.html"
      }
    }
  })

  .state('app.cover', {
    url: "/cover",
    views: {
      'menuContent': {
        templateUrl: "templates/cover.html"
      }
    }
  })

  .state('app.sobre', {
    url: "/sobre",
    views: {
      'menuContent': {
        templateUrl: "templates/sobre.html"
      }
    }
  });

    /*.state('app.cardgames', {
      url: "/cardgames",
      views: {
        'menuContent': {
          templateUrl: "templates/cardgames.html",
          controller: 'cardGamesCtrl'
        }
      }
    })*/

  /*.state('app.single', {
    url: "/cardgames/:cardgameId",
    views: {
      'menuContent': {
        templateUrl: "templates/king.html",
        controller: 'kingCtrl'
      }
    }
  });*/
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cover');
});
