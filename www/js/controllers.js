angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $location, $timeout, $ionicSideMenuDelegate, $ionicLoading, $ionicHistory) 
{
  $scope.loadingIndicator = $ionicLoading.show({
      template: 'Por favor aguarde...<br><ion-spinner></ion-spinner>',
      content: 'Carregando...',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      noBackDrop: false
  });

  //Required to use parseInt() in expressions
  $scope.parseInt = parseInt;
  $scope.isNaN = isNaN;

  // Form data for the login modal
  //$scope.loginData = {};

  $scope.geralsheet = {};
  $scope.baccaratsheet = {};
  $scope.biscasheet = {};
  $scope.kingsheet = {};
  $scope.casinosheet = {};
  $scope.canastasheet = {};
  $scope.copassheet = {};
  $scope.suecasheet = {};
  $scope.modal = {};

  //Custom CSS classes
  $scope.customColorClass = {};
  $scope.customColorClass.colorClass = "error_color";

  $scope.showHowManyPlayersModal = 0;

  $scope.goBackButton = function()
  {
    //$ionicHistory.goBack();
    //window.history.back();
    //window.history.go(-1);
    //$ionicHistory.clearHistory();
    $ionicHistory.backView().go();
    //$backView = $ionicHistory.backView();
    //$backView.go();
    console.log($ionicHistory.viewHistory());

    //alert('code to go back called. Did it work?');
  }

  $scope.go = function ( path ) {
         $location.path( path );
        };


  $scope.showBannerAdView = function()
  {
    // select the right Ad Id according to platform
    var admobid = {};

    if(/(android)/i.test(navigator.userAgent) ) 
    { // for android
        admobid = 
        {
            banner: 'ca-app-pub-4238800067251756/8855345223', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-4238800067251756/5348965629'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) 
    { // for ios
        admobid = 
        {
            banner: 'ca-app-pub-4238800067251756/4425145629', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-4238800067251756/4425145629'
        };
    } 
    else 
    { // for windows phone
        /*admobid = 
        {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
        };*/
    }

      if(window.AdMob)
      {
        window.AdMob.createBanner({
        adId: admobid.banner,
        position: window.AdMob.AD_POSITION.BOTTOM_CENTER,
        isTesting: false,
        overlap: false,
        autoShow: true});
      }
      else
      {
        //alert("Admob plugin not ready");
        console.log("Admob plugin not ready");
      }
  }

  //AdMob create ad function
  $scope.createInterstitialAdView = function()
  {
    // select the right Ad Id according to platform
    var admobid = {};

    if(/(android)/i.test(navigator.userAgent) ) 
    { // for android
        admobid = 
        {
            banner: 'ca-app-pub-4238800067251756/8855345223', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-4238800067251756/5348965629'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) 
    { // for ios
        admobid = 
        {
            banner: 'ca-app-pub-4238800067251756/9779165222', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-4238800067251756/9779165222'
        };
    } 
    else 
    { // for windows phone
        /*admobid = 
        {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
        };*/
    }

      // preppare and load ad resource in background, e.g. at begining of game level
      if(window.AdMob)
      {
        //alert('OK!');
        window.AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:true} );
      }
      else
      {
        //alert("Admob plugin not ready");
        console.log("Admob plugin not ready");
      }

      // show the interstitial later, e.g. at end of game level
      if(window.AdMob)
      {
        window.AdMob.showInterstitial();
      }
      else
      {
        //alert("Admob plugin not ready");
        console.log("Admob plugin not ready");
      }
  }

  $scope.closeKingAndShowAd = function(wid)
  {
    if(wid != undefined && wid != null)
    {
      $scope.closeKingModal(wid);
    }

    $scope.createInterstitialAdView();
  }

  $scope.closeCanastaAndShowAd = function(wid)
  {
    if(wid != undefined && wid != null)
    {
      $scope.closeCanastaModal(wid);
    }

    $scope.createInterstitialAdView();
  }

  $scope.closeCasinoAndShowAd = function(wid)
  {
    if(wid != undefined && wid != null)
    {
      $scope.closeCasinoModal(wid);
    }

    $scope.createInterstitialAdView();
  }

  $scope.closeCopasAndShowAd = function(wid)
  {
    if(wid != undefined && wid != null)
    {
      $scope.closeCopasModal(wid);
    }

    $scope.createInterstitialAdView();
  }

  $scope.closeGeralAndShowAd = function(wid)
  {
    if(wid != undefined && wid != null)
    {
      $scope.closeGeralModal(wid);
    }

    $scope.createInterstitialAdView();
  }

  $scope.closeSuecaAndShowAd = function(wid)
  {
    if(wid != undefined && wid != null)
    {
      $scope.closeSuecaModal(wid);
    }

    $scope.createInterstitialAdView();
  }

  $scope.closeBiscaAndShowAd = function(wid)
  {
    if(wid != undefined && wid != null)
    {
      $scope.closeBiscaModal(wid);
    }

    $scope.createInterstitialAdView();
  }

  $scope.showLeftMenu = function()
  {
    $ionicSideMenuDelegate.toggleLeft();
  }

  $ionicModal.fromTemplateUrl('templates/king_notricks_modal.html',
  {
    id: 1,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_notricks_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_hearts_modal.html',
  {
    id: 2,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_hearts_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_dames_modal.html',
  {
    id: 3,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_dames_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_gents_modal.html',
  {
    id: 4,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_gents_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_king_modal.html',
  {
    id: 5,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_king_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_last_2_modal.html',
  {
    id: 6,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_last_2_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_first_auction_modal.html',
  {
    id: 7,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_first_auction_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_second_auction_modal.html',
  {
    id: 8,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_second_auction_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_third_auction_modal.html',
  {
    id: 9,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_third_auction_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_fourth_auction_modal.html',
  {
    id: 10,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_fourth_auction_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/how_many_teams_modal.html',
  {
    id: 11,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.how_many_teams_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_reset_scores_modal.html',
  {
    id: 12,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_reset_scores_modal = modal;
  });


  //Casino Modals

  $ionicModal.fromTemplateUrl('templates/casino_settings_modal.html',
  {
    id: 13,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.casino_settings_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/casino_who_won_modal.html',
  {
    id: 14,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.casino_who_won_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/casino_reset_scores_modal.html',
  {
    id: 15,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.casino_reset_scores_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/casino_winner_modal.html',
  {
    id: 16,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.casino_winner_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/casino_tie_modal.html',
  {
    id: 17,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.casino_tie_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_winner_modal.html',
  {
    id: 18,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_winner_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/casino_help_modal.html',
  {
    id: 19,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.casino_help_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/casino_how_to_modal.html',
  {
    id: 20,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.casino_how_to_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/casino_score_info_modal.html',
  {
    id: 21,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.casino_score_info_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/casino_learn_to_play_modal.html',
  {
    id: 22,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.casino_learn_to_play_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_help_modal.html',
  {
    id: 23,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_help_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_how_to_modal.html',
  {
    id: 24,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_how_to_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_score_info_modal.html',
  {
    id: 25,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_score_info_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/king_learn_to_play_modal.html',
  {
    id: 26,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.king_learn_to_play_modal = modal;
  });

  //Copas Modals
  $ionicModal.fromTemplateUrl('templates/copas_settings_modal.html',
  {
    id: 27,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.copas_settings_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/copas_reset_scores_modal.html',
  {
    id: 28,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.copas_reset_scores_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/copas_winner_modal.html',
  {
    id: 29,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.copas_winner_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/copas_tie_modal.html',
  {
    id: 30,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.copas_tie_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/copas_help_modal.html',
  {
    id: 31,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.copas_help_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/copas_how_to_modal.html',
  {
    id: 32,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.copas_how_to_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/copas_score_info_modal.html',
  {
    id: 33,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.copas_score_info_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/copas_learn_to_play_modal.html',
  {
    id: 34,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.copas_learn_to_play_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/geral_settings_modal.html',
  {
    id: 35,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.geral_settings_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/geral_reset_scores_modal.html',
  {
    id: 36,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.geral_reset_scores_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/geral_help_modal.html',
  {
    id: 37,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.geral_help_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/geral_how_to_modal.html',
  {
    id: 38,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.geral_how_to_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/sueca_win_modal.html',
  {
    id: 39,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.sueca_win_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/sueca_settings_modal.html',
  {
    id: 40,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.sueca_settings_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/sueca_reset_scores_modal.html',
  {
    id: 41,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.sueca_reset_scores_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/sueca_help_modal.html',
  {
    id: 42,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.sueca_help_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/sueca_learn_to_play_modal.html',
  {
    id: 43,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.sueca_learn_to_play_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/sueca_how_to_modal.html',
  {
    id: 44,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.sueca_how_to_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/sueca_score_info_modal.html',
  {
    id: 45,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.sueca_score_info_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/sueca_confirm_winner_modal.html',
  {
    id: 46,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.sueca_confirm_winner_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/sueca_confirm_delete_modal.html',
  {
    id: 47,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.sueca_confirm_delete_modal = modal;
  });

  //Bisca modals

  $ionicModal.fromTemplateUrl('templates/bisca_win_modal.html',
  {
    id: 48,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.bisca_win_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/bisca_settings_modal.html',
  {
    id: 49,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.bisca_settings_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/bisca_reset_scores_modal.html',
  {
    id: 50,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.bisca_reset_scores_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/bisca_help_modal.html',
  {
    id: 51,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.bisca_help_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/bisca_learn_to_play_modal.html',
  {
    id: 52,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.bisca_learn_to_play_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/bisca_how_to_modal.html',
  {
    id: 53,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.bisca_how_to_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/bisca_score_info_modal.html',
  {
    id: 54,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.bisca_score_info_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/bisca_confirm_winner_modal.html',
  {
    id: 55,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.bisca_confirm_winner_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/bisca_confirm_delete_modal.html',
  {
    id: 56,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.bisca_confirm_delete_modal = modal;
  });

  //Canasta Modals

  $ionicModal.fromTemplateUrl('templates/canasta_settings_modal.html',
  {
    id: 57,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.canasta_settings_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/canasta_who_won_modal.html',
  {
    id: 58,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.canasta_who_won_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/canasta_reset_scores_modal.html',
  {
    id: 59,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.canasta_reset_scores_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/canasta_winner_modal.html',
  {
    id: 60,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.canasta_winner_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/canasta_tie_modal.html',
  {
    id: 61,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.canasta_tie_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/canasta_help_modal.html',
  {
    id: 62,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.canasta_help_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/canasta_how_to_modal.html',
  {
    id: 63,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.canasta_how_to_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/canasta_score_info_modal.html',
  {
    id: 64,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.canasta_score_info_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/canasta_learn_to_play_modal.html',
  {
    id: 65,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.canasta_learn_to_play_modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/copas_who_won_modal.html',
  {
    id: 66,
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) 
  {
      $scope.copas_who_won_modal = modal;
  });

  $scope.deleteValueIfZero = function(event)
  {
    //alert(event.target.value);
    if(Number(event.target.value) == 0)
    {
      event.target.value = "";
    }
  }

  $scope.addZeroIfEmpty = function(event)
  {
    //alert(event.target.value);
    if(String(event.target.value) == "")
    {
      event.target.value = 0;
    }
  }

  $scope.closeHowManyPlayersModal = function()
  {
    //alert(modal_name);

    //$scope.how_many_teams_modal.hide();
    $scope.showHowManyPlayersModal = 1;
    $scope.how_many_teams_modal.hide();
  }

  $scope.openBiscaModalIfEnabled = function(game, player_no, id, enabled)
  {
    if(enabled)
    {
      $scope.openBiscaModal(game, player_no, id);
    }
  }

  $scope.openBiscaModal = function(game, player_no, id)
  {
    var type = "",
        modal_name = "";
        
    switch(id) 
    {
      case 48: //win
      {
        type = "win";
        break;
      }
      case 49: //settings
      {
        type = "settings";
        break;
      }
      case 50: //reset scores
      {
        type = "reset_scores";
        break;
      }
      case 51: //help
      {
        type = "help";
        break;
      }
      case 52: //learn_to_play
      {
        type = "learn_to_play";
        break;
      }
      case 53: //how_to
      {
        type = "how_to";
        break;
      }
      case 54: //score_info
      {
        type = "score_info";
        break;
      }
      case 55: //confirm_winner
      {
        type = "confirm_winner";
        break;
      }
      case 56: //confirm_delete
      {
        type = "confirm_delete";
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }

    modal_name = "bisca_" + type + "_modal";

    $scope.prepareBiscaModal(game, player_no);

    $scope[modal_name].show();
  }

  $scope.openSuecaModalIfEnabled = function(game, player_no, id, enabled)
  {
    if(enabled)
    {
      $scope.openSuecaModal(game, player_no, id);
    }
  }

  $scope.openSuecaModal = function(game, player_no, id)
  {
    var type = "",
        modal_name = "";
        
    switch(id) 
    {
      case 39: //win
      {
        type = "win";
        break;
      }
      case 40: //settings
      {
        type = "settings";
        break;
      }
      case 41: //reset scores
      {
        type = "reset_scores";
        break;
      }
      case 42: //help
      {
        type = "help";
        break;
      }
      case 43: //learn_to_play
      {
        type = "learn_to_play";
        break;
      }
      case 44: //how_to
      {
        type = "how_to";
        break;
      }
      case 45: //score_info
      {
        type = "score_info";
        break;
      }
      case 46: //confirm_winner
      {
        type = "confirm_winner";
        break;
      }
      case 47: //confirm_delete
      {
        type = "confirm_delete";
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }

    modal_name = "sueca_" + type + "_modal";

    $scope.prepareSuecaModal(game, player_no);

    $scope[modal_name].show();
  }

  $scope.openGeralModal = function(id)
  {
    var type = "",
        modal_name = "";
        
    switch(id) 
    {
      case 35:
      {
        type = "settings";
        break;
      }
      case 36:
      {
        type = "reset_scores";
        break;
      }
      case 37:
      {
        type = "help";
        break;
      }
      case 38:
      {
        type = "how_to";
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }

    modal_name = "geral_" + type + "_modal";

    $scope[modal_name].show();
  }

  $scope.openCanastaModal = function(id)
  {
    var type = "",
        modal_name = "";
        
    switch(id) 
    {
      case 57: //settings
      {
        type = "settings";
        break;
      }
      case 58: //who won?
      {
        type = "who_won";
        break;
      }
      case 59: //reset
      {
        type = "reset_scores";
        break;
      }
      case 60: //winner
      {
        type = "winner";
        break;
      }
      case 61: //tie
      {
        type = "tie";
        break;
      }
      case 62: //help
      {
        type = "help";
        break;
      }
      case 63: //how-to
      {
        type = "how_to";
        break;
      }
      case 64: //score info
      {
        type = "score_info";
        break;
      }
      case 65: //learn to play
      {
        type = "learn_to_play";
        break;
      }
      default:
      {
        //Show publicity
        break;
      }
    }

    modal_name = "canasta_" + type + "_modal";

    $scope[modal_name].show();
  }

  $scope.openCasinoModal = function(id)
  {
    var type = "",
        modal_name = "";
        
    switch(id) 
    {
      case 13: //settings
      {
        type = "settings";
        break;
      }
      case 14: //who won?
      {
        type = "who_won";
        break;
      }
      case 15: //reset
      {
        type = "reset_scores";
        break;
      }
      case 16: //winner
      {
        type = "winner";
        break;
      }
      case 17: //tie
      {
        type = "tie";
        break;
      }
      case 19: //help
      {
        type = "help";
        break;
      }
      case 20: //how-to
      {
        type = "how_to";
        break;
      }
      case 21: //score info
      {
        type = "score_info";
        break;
      }
      case 22: //learn to play
      {
        type = "learn_to_play";
        break;
      }
      default:
      {
        //Show publicity
        break;
      }
    }

    modal_name = "casino_" + type + "_modal";

    $scope[modal_name].show();
  }

  $scope.openCopasModal = function(id)
  {
    var type = "",
        modal_name = "";
        
    switch(id) 
    {
      case 27: //settings
      {
        type = "settings";
        break;
      }
      case 28: //reset
      {
        type = "reset_scores";
        break;
      }
      case 29: //winner
      {
        type = "winner";
        break;
      }
      case 30: //tie
      {
        type = "tie";
        break;
      }
      case 31: //help
      {
        type = "help";
        break;
      }
      case 32: //how-to
      {
        type = "how_to";
        break;
      }
      case 33: //score info
      {
        type = "score_info";
        break;
      }
      case 34: //learn to play
      {
        type = "learn_to_play";
        break;
      }
      case 66: //who_won
      {
        type = "who_won";
        break;
      }
      default:
      {
        //Show publicity
        break;
      }
    }

    modal_name = "copas_" + type + "_modal";

    $scope[modal_name].show();
  }

  

  $scope.openKingModal = function(id) 
  {
    var game = "",
        desired_value = 0,
        modal_name = "";

    switch(id) 
    {
      case 1: //No tricks modal
      {
        game = "notricks";
        desired_value = 13;
        break;
      }
      case 2: //Hearts modal
      {
        game = "hearts";
        desired_value = 13;
        break;
      }
      case 3: //Dames modal
      {
        game = "dames";
        desired_value = 4;
        break;
      }
      case 4: //Gents modal
      {
        game = "gents";
        desired_value = 8;
        break;
      }
      case 5: //King modal
      {
        game = "king";
        desired_value = 1;
        break;
      }
      case 6: //Last 2 modal
      {
        game = "last_2";
        desired_value = 2;
        break;
      }
      case 7: //First auction
      {
        game = "first_auction";
        desired_value = 13;
        break;
      }
      case 8: //Second auction
      {
        game = "second_auction";
        desired_value = 13;
        break;
      }
      case 9: //Third auction
      {
        game = "third_auction";
        desired_value = 13;
        break;
      }
      case 10: //Fourth auction
      {
        game = "fourth_auction";
        desired_value = 13;
        break;
      }
      case 12: //Reset scores
      {
        game = "reset_scores";
        break;
      }
      case 23: //help
      {
        game = "help";
        break;
      }
      case 24: //Winners
      {
        game = "how_to";
        break;
      }
      case 25: //Winners
      {
        game = "score_info";
        break;
      }
      case 26: //Winners
      {
        game = "learn_to_play";
        break;
      }

      default:
      {
        //Show publicity
        break;
      }
    }

    modal_name = "king_" + game + "_modal";

    //Prepare the modal window and show it
    $scope.prepareKingModal(game);
    $scope.divideScores(game);
    $scope.updateModalTotal(game, desired_value);

    $scope[modal_name].show();
  }

  $scope.prepareSuecaModal = function(game, player_no)
  {
    $scope.fetchGameNumberToSuecaModal(game);
    $scope.fetchPlayerNumberToSuecaModal(player_no);
    $scope.fetchNameToSuecaModal(game, player_no);
  }

  $scope.prepareBiscaModal = function(game, player_no)
  {
    $scope.fetchGameNumberToBiscaModal(game);
    $scope.fetchPlayerNumberToBiscaModal(player_no);
    $scope.fetchNameToBiscaModal(game, player_no);
  }

  //Makes all preparations and initializations needed when opening a modal
  $scope.prepareKingModal = function(game)
  {
    //Get the Player names, scores and calculate the total
    $scope.fetchNamesToModal(game);
    $scope.fetchScoresToModal(game);
    $scope.fetchModalTotal(game);

    //Some variables should be reset when a new modal is shown
    $scope.resetModalVariables();
  }

  $scope.fetchGameNumberToBiscaModal = function(game)
  {
    $scope.biscasheet.modal_game_no = game;
  }

  $scope.fetchPlayerNumberToBiscaModal = function(player_no)
  {

    $scope.biscasheet.modal_player_no = player_no;
  }

  $scope.fetchNameToBiscaModal = function(game, player_no)
  {
    var player_model_name = "p" + player_no + "_name";

    $scope.biscasheet.modal_player_name = $scope.biscasheet.gameList[game][player_model_name];
  }

  $scope.fetchGameNumberToSuecaModal = function(game)
  {
    $scope.suecasheet.modal_game_no = game;
  }

  $scope.fetchPlayerNumberToSuecaModal = function(player_no)
  {

    $scope.suecasheet.modal_player_no = player_no;
  }

  $scope.fetchNameToSuecaModal = function(game, player_no)
  {
    var player_model_name = "p" + player_no + "_name";

    $scope.suecasheet.modal_player_name = $scope.suecasheet.gameList[game][player_model_name];
  }

  $scope.fetchNamesToModal = function(game)
  {
      //Fetch names
      var p1_modal_name_model = game + "_modal_p1_name",
          p2_modal_name_model = game + "_modal_p2_name",
          p3_modal_name_model = game + "_modal_p3_name",
          p4_modal_name_model = game + "_modal_p4_name";

      $scope.kingsheet[p1_modal_name_model] = $scope.kingsheet.p1_name;
      $scope.kingsheet[p2_modal_name_model] = $scope.kingsheet.p2_name;
      $scope.kingsheet[p3_modal_name_model] = $scope.kingsheet.p3_name;
      $scope.kingsheet[p4_modal_name_model] = $scope.kingsheet.p4_name;
  }


  $scope.fetchScoresToModal = function(game)
  {
      //Fetch names
      var p1_modal_score_model = "p1_" + game + "_modal",
          p2_modal_score_model = "p2_" + game + "_modal",
          p3_modal_score_model = "p3_" + game + "_modal",
          p4_modal_score_model = "p4_" + game + "_modal",
          p1_score_model = "p1_" + game,
          p2_score_model = "p2_" + game,
          p3_score_model = "p3_" + game,
          p4_score_model = "p4_" + game;

      if($scope.kingsheet[p1_score_model] != undefined && !$scope.isNaN($scope.kingsheet[p1_score_model]))
      {
        $scope.kingsheet[p1_modal_score_model] = $scope.kingsheet[p1_score_model];
      }
      else
      {
        $scope.kingsheet[p1_modal_score_model] = 0;
      }

      if($scope.kingsheet[p2_score_model] != undefined && !$scope.isNaN($scope.kingsheet[p2_score_model]))
      {
        $scope.kingsheet[p2_modal_score_model] = $scope.kingsheet[p2_score_model];
      }
      else
      {
        $scope.kingsheet[p2_modal_score_model] = 0;
      }

      if($scope.kingsheet[p3_score_model] != undefined && !$scope.isNaN($scope.kingsheet[p3_score_model]))
      {
        $scope.kingsheet[p3_modal_score_model] = $scope.kingsheet[p3_score_model];
      }
      else
      {
        $scope.kingsheet[p3_modal_score_model] = 0;
      }

      if($scope.kingsheet[p4_score_model] != undefined && !$scope.isNaN($scope.kingsheet[p4_score_model]))
      {
        $scope.kingsheet[p4_modal_score_model] = $scope.kingsheet[p4_score_model];
      }
      else
      {
        $scope.kingsheet[p4_modal_score_model] = 0;
      }
  }

  $scope.fetchModalTotal = function(game)
  {
    var p1_score_model = "p1_" + game,
        p2_score_model = "p2_" + game,
        p3_score_model = "p3_" + game,
        p4_score_model = "p4_" + game,
        modal_total_model = game + "_modal_total",
        modal_total = 0;

    if($scope.kingsheet[p1_score_model] != undefined)
    {
      modal_total += $scope.kingsheet[p1_score_model];
    }

    if($scope.kingsheet[p2_score_model] != undefined)
    {
      modal_total += $scope.kingsheet[p2_score_model];
    }

    if($scope.kingsheet[p3_score_model] != undefined)
    {
      modal_total += $scope.kingsheet[p3_score_model];
    }

    if($scope.kingsheet[p4_score_model] != undefined)
    {
      modal_total += $scope.kingsheet[p4_score_model];
    }

    $scope.kingsheet[modal_total_model] = modal_total;
  }

  $scope.closeKingModal = function(id) 
  {
    var game = "",
        show_ads = false;

    switch(id) 
    {
      case 1: //No tricks modal
      {
        game = "notricks";
        break;
      }
      case 2:
      {
        game = "hearts";
        break;
      }
      case 3:
      {
        game = "dames";
        break;
      }
      case 4:
      {
        game = "gents";
        break;
      }
      case 5:
      {
        game = "king";
        break;
      }
      case 6:
      {
        game = "last_2";
        show_ads = true;
        break;
      }
      case 7:
      {
        game = "first_auction";
        show_ads = true;
        break;
      }
      case 8:
      {
        game = "second_auction";
        show_ads = true;
        break;
      }
      case 9:
      {
        game = "third_auction";
        show_ads = true;
        break;
      }
      case 10:
      {
        game = "fourth_auction";
        show_ads = true;
        break;
      }
      case 12:
      {
        game = "reset_scores";
        break;
      }
      case 18: //Winners
      {
        game = "winner";
      }
      case 23: //help
      {
        game = "help";
        break;
      }
      case 24: //Winners
      {
        game = "how_to";
        break;
      }
      case 25: //Winners
      {
        game = "score_info";
        break;
      }
      case 26: //Winners
      {
        game = "learn_to_play";
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }

    modal_name = "king_" + game + "_modal";

    //Transfer the modal data before exiting from it
    $scope.transferModalScores(game);
    $scope.calculateScores(game);

    $scope[modal_name].hide();

    if(show_ads)
    {
      //Abrir modal com publicidade
    }
  }

  $scope.closeGeralModal = function(id) 
  {
    var type = "";

    switch(id) 
    {
      case 35:
      {
        type = "settings";
        break;
      }
      case 36:
      {
        type = "reset_scores";
        break;
      }
      case 37:
      {
        type = "help";
        break;
      }
      case 38:
      {
        type = "how_to";
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }

    modal_name = "geral_" + type + "_modal";

    $scope[modal_name].hide();
  }

  $scope.closeCanastaModal = function(id) 
  {
    var type = "";

    switch(id) 
    {
      case 57:
      {
        type = "settings";
        break;
      }
      case 58:
      {
        type = "who_won";
        break;
      }
      case 59:
      {
        type = "reset_scores";
        break;
      }
      case 60:
      {
        type = "winner";
        break;
      }
      case 61:
      {
        type = "tie";
        break;
      }
      case 62:
      {
        type = "help";
        break;
      }
      case 63:
      {
        type = "how_to";
        break;
      }
      case 64:
      {
        type = "score_info";
        break;
      }
      case 65:
      {
        type = "learn_to_play";
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }

    modal_name = "canasta_" + type + "_modal";

    $scope[modal_name].hide();
  }

  $scope.closeCasinoModal = function(id) 
  {
    var type = "";

    switch(id) 
    {
      case 13:
      {
        type = "settings";
        break;
      }
      case 14:
      {
        type = "who_won";
        break;
      }
      case 15:
      {
        type = "reset_scores";
        break;
      }
      case 16:
      {
        type = "winner";
        break;
      }
      case 17:
      {
        type = "tie";
        break;
      }
      case 19:
      {
        type = "help";
        break;
      }
      case 20:
      {
        type = "how_to";
        break;
      }
      case 21:
      {
        type = "score_info";
        break;
      }
      case 22:
      {
        type = "learn_to_play";
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }

    modal_name = "casino_" + type + "_modal";

    $scope[modal_name].hide();
  }

  $scope.closeSuecaModal = function(id) 
  {
    var type = "";

    switch(id) 
    {
      case 39: //win
      {
        type = "win";
        break;
      }
      case 40: //settings
      {
        type = "settings";
        break;
      }
      case 41: //reset scores
      {
        type = "reset_scores";
        break;
      }
      case 42: //help
      {
        type = "help";
        break;
      }
      case 43: //learn_to_play
      {
        type = "learn_to_play";
        break;
      }
      case 44: //how_to
      {
        type = "how_to";
        break;
      }
      case 45: //score_info
      {
        type = "score_info";
        break;
      }
      case 46: //confirm_winner
      {
        type = "confirm_winner";
        break;
      }
      case 47: //confirm_delete
      {
        type = "confirm_delete";
        break;
      }
      default:
      {
        //Show publicity
        break;
      }
    }

    modal_name = "sueca_" + type + "_modal";

    $scope[modal_name].hide();
  }

  $scope.closeBiscaModal = function(id) 
  {
    var type = "";

    switch(id) 
    {
      case 46: //win
      {
        type = "win";
        break;
      }
      case 47: //settings
      {
        type = "settings";
        break;
      }
      case 48: //reset scores
      {
        type = "reset_scores";
        break;
      }
      case 49: //help
      {
        type = "help";
        break;
      }
      case 50: //learn_to_play
      {
        type = "learn_to_play";
        break;
      }
      case 51: //how_to
      {
        type = "how_to";
        break;
      }
      case 52: //score_info
      {
        type = "score_info";
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }

    modal_name = "bisca_" + type + "_modal";

    $scope[modal_name].hide();
  }

  $scope.closeBiscaModal = function(id) 
  {
    var type = "";

    switch(id) 
    {
      case 48: //win
      {
        type = "win";
        break;
      }
      case 49: //settings
      {
        type = "settings";
        break;
      }
      case 50: //reset scores
      {
        type = "reset_scores";
        break;
      }
      case 51: //help
      {
        type = "help";
        break;
      }
      case 52: //learn_to_play
      {
        type = "learn_to_play";
        break;
      }
      case 53: //how_to
      {
        type = "how_to";
        break;
      }
      case 54: //score_info
      {
        type = "score_info";
        break;
      }
      case 55: //confirm_winner
      {
        type = "confirm_winner";
        break;
      }
      case 56: //confirm_delete
      {
        type = "confirm_delete";
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }

    modal_name = "bisca_" + type + "_modal";

    $scope[modal_name].hide();
  }

  $scope.closeCopasModal = function(id) 
  {
    var type = "";

    switch(id) 
    {
      case 27: //settings
      {
        type = "settings";
        break;
      }
      case 28: //reset
      {
        type = "reset_scores";
        break;
      }
      case 29: //winner
      {
        type = "winner";
        break;
      }
      case 30: //tie
      {
        type = "tie";
        break;
      }
      case 31: //help
      {
        type = "help";
        break;
      }
      case 32: //how-to
      {
        type = "how_to";
        break;
      }
      case 33: //score info
      {
        type = "score_info";
        break;
      }
      case 34: //learn to play
      {
        type = "learn_to_play";
        break;
      }
      default:
      {
        //Show publicity
        break;
      }
    }

    modal_name = "copas_" + type + "_modal";

    $scope[modal_name].hide();
  }

  $scope.calculateScores = function(game)
  {
    var p1_score_model = "p1_" + game,
        p2_score_model = "p2_" + game,
        p3_score_model = "p3_" + game,
        p4_score_model = "p4_" + game;

    switch(game) 
    {
      case 'notricks': //No tricks
      {
        //Each trick is worth -20 points
        $scope.kingsheet[p1_score_model] = -$scope.kingsheet[p1_score_model] * 20;
        $scope.kingsheet[p2_score_model] = -$scope.kingsheet[p2_score_model] * 20;
        $scope.kingsheet[p3_score_model] = -$scope.kingsheet[p3_score_model] * 20;
        $scope.kingsheet[p4_score_model] = -$scope.kingsheet[p4_score_model] * 20;
        break;
      }
      case 'hearts': //Hearts
      {
        //Each heart is worth -20 points
        $scope.kingsheet[p1_score_model] = -$scope.kingsheet[p1_score_model] * 20;
        $scope.kingsheet[p2_score_model] = -$scope.kingsheet[p2_score_model] * 20;
        $scope.kingsheet[p3_score_model] = -$scope.kingsheet[p3_score_model] * 20;
        $scope.kingsheet[p4_score_model] = -$scope.kingsheet[p4_score_model] * 20;
        break;
      }
      case 'dames': //Dames
      {
        //Each queen is worth -50 points
        $scope.kingsheet[p1_score_model] = -$scope.kingsheet[p1_score_model] * 50;
        $scope.kingsheet[p2_score_model] = -$scope.kingsheet[p2_score_model] * 50;
        $scope.kingsheet[p3_score_model] = -$scope.kingsheet[p3_score_model] * 50;
        $scope.kingsheet[p4_score_model] = -$scope.kingsheet[p4_score_model] * 50;
        break;
      }
      case 'gents': //Kings and Jacks
      {
        //Each king/jack is worth -30 points
        $scope.kingsheet[p1_score_model] = -$scope.kingsheet[p1_score_model] * 30;
        $scope.kingsheet[p2_score_model] = -$scope.kingsheet[p2_score_model] * 30;
        $scope.kingsheet[p3_score_model] = -$scope.kingsheet[p3_score_model] * 30;
        $scope.kingsheet[p4_score_model] = -$scope.kingsheet[p4_score_model] * 30;
        break;
      }
      case 'king': //Kings of Hearts
      {
        //The King is worth -160 points
        $scope.kingsheet[p1_score_model] = -$scope.kingsheet[p1_score_model] * 160;
        $scope.kingsheet[p2_score_model] = -$scope.kingsheet[p2_score_model] * 160;
        $scope.kingsheet[p3_score_model] = -$scope.kingsheet[p3_score_model] * 160;
        $scope.kingsheet[p4_score_model] = -$scope.kingsheet[p4_score_model] * 160;
        break;
      }
      case 'last_2': //Last 2 tricks
      {
        //Each trick is worth -90 points
        $scope.kingsheet[p1_score_model] = -$scope.kingsheet[p1_score_model] * 90;
        $scope.kingsheet[p2_score_model] = -$scope.kingsheet[p2_score_model] * 90;
        $scope.kingsheet[p3_score_model] = -$scope.kingsheet[p3_score_model] * 90;
        $scope.kingsheet[p4_score_model] = -$scope.kingsheet[p4_score_model] * 90;
        break;
      }
      case 'first_auction':
      {
        var toggle_model = game + "_toggle";

        if($scope.kingsheet[toggle_model] == false || $scope.kingsheet[toggle_model] == undefined)
        {
          $scope.kingsheet[p1_score_model] = $scope.kingsheet[p1_score_model] * 25;
          $scope.kingsheet[p2_score_model] = $scope.kingsheet[p2_score_model] * 25;
          $scope.kingsheet[p3_score_model] = $scope.kingsheet[p3_score_model] * 25;
          $scope.kingsheet[p4_score_model] = $scope.kingsheet[p4_score_model] * 25;
        }
        else
        {
          $scope.kingsheet[p1_score_model] = 325 - ($scope.kingsheet[p1_score_model] * 75);
          $scope.kingsheet[p2_score_model] = 325 - ($scope.kingsheet[p2_score_model] * 75);
          $scope.kingsheet[p3_score_model] = 325 - ($scope.kingsheet[p3_score_model] * 75);
          $scope.kingsheet[p4_score_model] = 325 - ($scope.kingsheet[p4_score_model] * 75);
        }
        break;
      }
      case 'second_auction':
      {
        var toggle_model = game + "_toggle";

        if($scope.kingsheet[toggle_model] == false || $scope.kingsheet[toggle_model] == undefined)
        {
          $scope.kingsheet[p1_score_model] = $scope.kingsheet[p1_score_model] * 25;
          $scope.kingsheet[p2_score_model] = $scope.kingsheet[p2_score_model] * 25;
          $scope.kingsheet[p3_score_model] = $scope.kingsheet[p3_score_model] * 25;
          $scope.kingsheet[p4_score_model] = $scope.kingsheet[p4_score_model] * 25;
        }
        else
        {
          $scope.kingsheet[p1_score_model] = 325 - ($scope.kingsheet[p1_score_model] * 75);
          $scope.kingsheet[p2_score_model] = 325 - ($scope.kingsheet[p2_score_model] * 75);
          $scope.kingsheet[p3_score_model] = 325 - ($scope.kingsheet[p3_score_model] * 75);
          $scope.kingsheet[p4_score_model] = 325 - ($scope.kingsheet[p4_score_model] * 75);
        }
        break;
      }
      case 'third_auction':
      {
        var toggle_model = game + "_toggle";

        if($scope.kingsheet[toggle_model] == false || $scope.kingsheet[toggle_model] == undefined)
        {
          $scope.kingsheet[p1_score_model] = $scope.kingsheet[p1_score_model] * 25;
          $scope.kingsheet[p2_score_model] = $scope.kingsheet[p2_score_model] * 25;
          $scope.kingsheet[p3_score_model] = $scope.kingsheet[p3_score_model] * 25;
          $scope.kingsheet[p4_score_model] = $scope.kingsheet[p4_score_model] * 25;
        }
        else
        {
          $scope.kingsheet[p1_score_model] = 325 - ($scope.kingsheet[p1_score_model] * 75);
          $scope.kingsheet[p2_score_model] = 325 - ($scope.kingsheet[p2_score_model] * 75);
          $scope.kingsheet[p3_score_model] = 325 - ($scope.kingsheet[p3_score_model] * 75);
          $scope.kingsheet[p4_score_model] = 325 - ($scope.kingsheet[p4_score_model] * 75);
        }
        break;
      }
      case 'fourth_auction':
      {
        var toggle_model = game + "_toggle";

        if($scope.kingsheet[toggle_model] == false || $scope.kingsheet[toggle_model] == undefined)
        {
          $scope.kingsheet[p1_score_model] = $scope.kingsheet[p1_score_model] * 25;
          $scope.kingsheet[p2_score_model] = $scope.kingsheet[p2_score_model] * 25;
          $scope.kingsheet[p3_score_model] = $scope.kingsheet[p3_score_model] * 25;
          $scope.kingsheet[p4_score_model] = $scope.kingsheet[p4_score_model] * 25;
        }
        else
        {
          $scope.kingsheet[p1_score_model] = 325 - ($scope.kingsheet[p1_score_model] * 75);
          $scope.kingsheet[p2_score_model] = 325 - ($scope.kingsheet[p2_score_model] * 75);
          $scope.kingsheet[p3_score_model] = 325 - ($scope.kingsheet[p3_score_model] * 75);
          $scope.kingsheet[p4_score_model] = 325 - ($scope.kingsheet[p4_score_model] * 75);
        }
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }
  }

  $scope.divideScores = function(game) 
  {
    var p1_modal_score_model = "p1_" + game + "_modal",
        p2_modal_score_model = "p2_" + game + "_modal",
        p3_modal_score_model = "p3_" + game + "_modal",
        p4_modal_score_model = "p4_" + game + "_modal";

    switch(game) 
    {
      case 'notricks': //No tricks
      {
        //Each trick is worth -20 points
        $scope.kingsheet[p1_modal_score_model] = -$scope.kingsheet[p1_modal_score_model] / 20;
        $scope.kingsheet[p2_modal_score_model] = -$scope.kingsheet[p2_modal_score_model] / 20;
        $scope.kingsheet[p3_modal_score_model] = -$scope.kingsheet[p3_modal_score_model] / 20;
        $scope.kingsheet[p4_modal_score_model] = -$scope.kingsheet[p4_modal_score_model] / 20;
        break;
      }
      case 'hearts': //Hearts
      {
        //Each heart is worth -20 points
        $scope.kingsheet[p1_modal_score_model] = -$scope.kingsheet[p1_modal_score_model] / 20;
        $scope.kingsheet[p2_modal_score_model] = -$scope.kingsheet[p2_modal_score_model] / 20;
        $scope.kingsheet[p3_modal_score_model] = -$scope.kingsheet[p3_modal_score_model] / 20;
        $scope.kingsheet[p4_modal_score_model] = -$scope.kingsheet[p4_modal_score_model] / 20;
        break;
      }
      case 'dames': //Dames
      {
        //Each queen is worth -50 points
        $scope.kingsheet[p1_modal_score_model] = -$scope.kingsheet[p1_modal_score_model] / 50;
        $scope.kingsheet[p2_modal_score_model] = -$scope.kingsheet[p2_modal_score_model] / 50;
        $scope.kingsheet[p3_modal_score_model] = -$scope.kingsheet[p3_modal_score_model] / 50;
        $scope.kingsheet[p4_modal_score_model] = -$scope.kingsheet[p4_modal_score_model] / 50;
        break;
      }
      case 'gents': //Kings and Jacks
      {
        //Each queen is worth -30 points
        $scope.kingsheet[p1_modal_score_model] = -$scope.kingsheet[p1_modal_score_model] / 30;
        $scope.kingsheet[p2_modal_score_model] = -$scope.kingsheet[p2_modal_score_model] / 30;
        $scope.kingsheet[p3_modal_score_model] = -$scope.kingsheet[p3_modal_score_model] / 30;
        $scope.kingsheet[p4_modal_score_model] = -$scope.kingsheet[p4_modal_score_model] / 30;
        break;
      }
      case 'king': //King of Hearts
      {
        //The king is worth -160 points
        $scope.kingsheet[p1_modal_score_model] = -$scope.kingsheet[p1_modal_score_model] / 160;
        $scope.kingsheet[p2_modal_score_model] = -$scope.kingsheet[p2_modal_score_model] / 160;
        $scope.kingsheet[p3_modal_score_model] = -$scope.kingsheet[p3_modal_score_model] / 160;
        $scope.kingsheet[p4_modal_score_model] = -$scope.kingsheet[p4_modal_score_model] / 160;
        break;
      }
      case 'last_2': //Last 2 tricks
      {
        //The king is worth -90 points
        $scope.kingsheet[p1_modal_score_model] = -$scope.kingsheet[p1_modal_score_model] / 90;
        $scope.kingsheet[p2_modal_score_model] = -$scope.kingsheet[p2_modal_score_model] / 90;
        $scope.kingsheet[p3_modal_score_model] = -$scope.kingsheet[p3_modal_score_model] / 90;
        $scope.kingsheet[p4_modal_score_model] = -$scope.kingsheet[p4_modal_score_model] / 90;
        break;
      }
      case 'first_auction': //1st auction
      {
        var toggle_model = game + "_toggle";

        if($scope.kingsheet[toggle_model] == false || $scope.kingsheet[toggle_model] == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet[p1_modal_score_model] = $scope.kingsheet[p1_modal_score_model] / 25;
          $scope.kingsheet[p2_modal_score_model] = $scope.kingsheet[p2_modal_score_model] / 25;
          $scope.kingsheet[p3_modal_score_model] = $scope.kingsheet[p3_modal_score_model] / 25;
          $scope.kingsheet[p4_modal_score_model] = $scope.kingsheet[p4_modal_score_model] / 25;
          
          //$scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet[p1_modal_score_model] = (325 - $scope.kingsheet[p1_modal_score_model]) / 75;
          $scope.kingsheet[p2_modal_score_model] = (325 - $scope.kingsheet[p2_modal_score_model]) / 75;
          $scope.kingsheet[p3_modal_score_model] = (325 - $scope.kingsheet[p3_modal_score_model]) / 75;
          $scope.kingsheet[p4_modal_score_model] = (325 - $scope.kingsheet[p4_modal_score_model]) / 75;
        }

        break;
      }
      case 'second_auction': //2nd auction
      {
        var toggle_model = game + "_toggle";

        if($scope.kingsheet[toggle_model] == false || $scope.kingsheet[toggle_model] == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet[p1_modal_score_model] = $scope.kingsheet[p1_modal_score_model] / 25;
          $scope.kingsheet[p2_modal_score_model] = $scope.kingsheet[p2_modal_score_model] / 25;
          $scope.kingsheet[p3_modal_score_model] = $scope.kingsheet[p3_modal_score_model] / 25;
          $scope.kingsheet[p4_modal_score_model] = $scope.kingsheet[p4_modal_score_model] / 25;
          
          //$scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet[p1_modal_score_model] = (325 - $scope.kingsheet[p1_modal_score_model]) / 75;
          $scope.kingsheet[p2_modal_score_model] = (325 - $scope.kingsheet[p2_modal_score_model]) / 75;
          $scope.kingsheet[p3_modal_score_model] = (325 - $scope.kingsheet[p3_modal_score_model]) / 75;
          $scope.kingsheet[p4_modal_score_model] = (325 - $scope.kingsheet[p4_modal_score_model]) / 75;
        }
        break;
      }
      case 'third_auction': //3rd auction
      {
        var toggle_model = game + "_toggle";

        if($scope.kingsheet[toggle_model] == false || $scope.kingsheet[toggle_model] == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet[p1_modal_score_model] = $scope.kingsheet[p1_modal_score_model] / 25;
          $scope.kingsheet[p2_modal_score_model] = $scope.kingsheet[p2_modal_score_model] / 25;
          $scope.kingsheet[p3_modal_score_model] = $scope.kingsheet[p3_modal_score_model] / 25;
          $scope.kingsheet[p4_modal_score_model] = $scope.kingsheet[p4_modal_score_model] / 25;
          
          //$scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet[p1_modal_score_model] = (325 - $scope.kingsheet[p1_modal_score_model]) / 75;
          $scope.kingsheet[p2_modal_score_model] = (325 - $scope.kingsheet[p2_modal_score_model]) / 75;
          $scope.kingsheet[p3_modal_score_model] = (325 - $scope.kingsheet[p3_modal_score_model]) / 75;
          $scope.kingsheet[p4_modal_score_model] = (325 - $scope.kingsheet[p4_modal_score_model]) / 75;
        }
        break;
      }
      case 'fourth_auction': //Last auction
      {
        var toggle_model = game + "_toggle";

        if($scope.kingsheet[toggle_model] == false || $scope.kingsheet[toggle_model] == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet[p1_modal_score_model] = $scope.kingsheet[p1_modal_score_model] / 25;
          $scope.kingsheet[p2_modal_score_model] = $scope.kingsheet[p2_modal_score_model] / 25;
          $scope.kingsheet[p3_modal_score_model] = $scope.kingsheet[p3_modal_score_model] / 25;
          $scope.kingsheet[p4_modal_score_model] = $scope.kingsheet[p4_modal_score_model] / 25;
          
          //$scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet[p1_modal_score_model] = (325 - $scope.kingsheet[p1_modal_score_model]) / 75;
          $scope.kingsheet[p2_modal_score_model] = (325 - $scope.kingsheet[p2_modal_score_model]) / 75;
          $scope.kingsheet[p3_modal_score_model] = (325 - $scope.kingsheet[p3_modal_score_model]) / 75;
          $scope.kingsheet[p4_modal_score_model] = (325 - $scope.kingsheet[p4_modal_score_model]) / 75;
        }
        break;
      }
      case 'fourth_auction':
      {
        var toggle_model = game + "_toggle";

        if($scope.kingsheet[toggle_model] == false || $scope.kingsheet[toggle_model] == undefined)
        {
          //console.log('positives divide');
          $scope.kingsheet[p1_modal_score_model] = $scope.kingsheet[p1_modal_score_model] / 25;
          $scope.kingsheet[p2_modal_score_model] = $scope.kingsheet[p2_modal_score_model] / 25;
          $scope.kingsheet[p3_modal_score_model] = $scope.kingsheet[p3_modal_score_model] / 25;
          $scope.kingsheet[p4_modal_score_model] = $scope.kingsheet[p4_modal_score_model] / 25;
          
          //$scope.kingsheet.p1_third_auction = $scope.kingsheet.p1_third_auction / 25;
        }
        else
        {
          //console.log('negatives divide');
          $scope.kingsheet[p1_modal_score_model] = (325 - $scope.kingsheet[p1_modal_score_model]) / 75;
          $scope.kingsheet[p2_modal_score_model] = (325 - $scope.kingsheet[p2_modal_score_model]) / 75;
          $scope.kingsheet[p3_modal_score_model] = (325 - $scope.kingsheet[p3_modal_score_model]) / 75;
          $scope.kingsheet[p4_modal_score_model] = (325 - $scope.kingsheet[p4_modal_score_model]) / 75;
        }
        break;
      }
      default:
      {
        //Close company info
        break;
      }
    }
  }

  $scope.updateModalTotal = function(game, desired_value)
  {
    //Build the ng-model of the total input
    var game_model = game + "_modal_total",
        model_p1 = "p1_" + game + "_modal",
        model_p2 = "p2_" + game + "_modal",
        model_p3 = "p3_" + game + "_modal",
        model_p4 = "p4_" + game + "_modal",
        total = 0;

    if($scope.kingsheet[model_p1] != undefined && !$scope.isNaN($scope.kingsheet[model_p1]))
    {
      total += $scope.kingsheet[model_p1];
    }

    if($scope.kingsheet[model_p2] != undefined && !$scope.isNaN($scope.kingsheet[model_p2]))
    {
      total += $scope.kingsheet[model_p2];
    }

    if($scope.kingsheet[model_p3] != undefined && !$scope.isNaN($scope.kingsheet[model_p3]))
    {
      total += $scope.kingsheet[model_p3];
    }

    if($scope.kingsheet[model_p4] != undefined && !$scope.isNaN($scope.kingsheet[model_p4]))
    {
      total += $scope.kingsheet[model_p4];
    }

    $scope.kingsheet[game_model] = total;

    $scope.changeModalTotalColor(game_model, desired_value);
  }

  $scope.changeModalTotalColor = function(ng_model_value, desired_value)
  {
    if($scope.kingsheet[ng_model_value] == desired_value)
    {
      $scope.customColorClass.colorClass = "ok_color";
    }
    else
    {
      $scope.customColorClass.colorClass = "error_color";
    }
  }

  $scope.resetModalVariables = function()
  {
    $scope.customColorClass.colorClass = "error_color";
  }

  $scope.transferModalScores = function(game)
  {
    //Fetch names
      var p1_modal_score_model = "p1_" + game + "_modal",
          p2_modal_score_model = "p2_" + game + "_modal",
          p3_modal_score_model = "p3_" + game + "_modal",
          p4_modal_score_model = "p4_" + game + "_modal",
          p1_score_model = "p1_" + game,
          p2_score_model = "p2_" + game,
          p3_score_model = "p3_" + game,
          p4_score_model = "p4_" + game;

      $scope.kingsheet[p1_score_model] = $scope.kingsheet[p1_modal_score_model];
      $scope.kingsheet[p2_score_model] = $scope.kingsheet[p2_modal_score_model];
      $scope.kingsheet[p3_score_model] = $scope.kingsheet[p3_modal_score_model];
      $scope.kingsheet[p4_score_model] = $scope.kingsheet[p4_modal_score_model];
  }

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() 
  {
    $scope.king_notricks_modal.remove();
  });

  // Execute action on hide modal
  $scope.$on('modal.hidden', function() 
  {
    // Execute action
  });

  // Execute action on remove modal
  $scope.$on('modal.removed', function() 
  {
    // Execute action
  });

  ionic.Platform.ready(function(){
    // will execute when device is ready, or immediately if the device is already ready.
    $ionicLoading.hide();
  });

  
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

// ||||||||||||||||||||||||||||||||||||-- BACCARAT LOGIC --||||||||||||||||||||||||||||||||||||


.controller('baccaratCtrl', function($scope, $stateParams) 
{

})

// ||||||||||||||||||||||||||||||||||||-- BRIDGE LOGIC --||||||||||||||||||||||||||||||||||||

.controller('bridgeCtrl', function($scope, $stateParams) 
{

})

// ||||||||||||||||||||||||||||||||||||-- CANASTA LOGIC --||||||||||||||||||||||||||||||||||||

.controller('canastaCtrl', function($scope, $stateParams) 
{

})

// ||||||||||||||||||||||||||||||||||||-- CASINO LOGIC --||||||||||||||||||||||||||||||||||||

.controller('casinoCtrl', function($scope, $stateParams) 
{

  //$scope = $scope;

  //$scope.showBannerAdView();

  $scope.showBannerAdView();

  $scope.addCasinoGame = function()
  {
    $scope.casinosheet.current_game++;

    $scope.casinosheet.gameList.push({ 
      number: $scope.casinosheet.current_game,
      text: "# " + String($scope.casinosheet.current_game), 
      p1_model: 0,
      p2_model: 0,
      p3_model: 0,
      p4_model: 0,
      total_model: 0
       });
  };

  $scope.setColorFromScore = function(player_no)
  {

    if($scope.casinosheet.p1_game_total == $scope.casinosheet.p2_game_total
      && $scope.casinosheet.p2_game_total == $scope.casinosheet.p3_game_total
      && $scope.casinosheet.p3_game_total == $scope.casinosheet.p4_game_total)
    {
      return 'color: black;';
    }
    else
    {
      var max, min;

      //Always check the last auction total score
      max = $scope.casinosheet.p1_game_total;

      if($scope.casinosheet.p2_game_total > max)
      {
        max = $scope.casinosheet.p2_game_total;
      }

      if($scope.casinosheet.p3_game_total > max && $scope.casinosheet.showThirdPlayer)
      {
        max = $scope.casinosheet.p3_game_total;
      }

      if($scope.casinosheet.p4_game_total > max && $scope.casinosheet.showFourthPlayer)
      {
        max = $scope.casinosheet.p4_game_total;
      }

      if($scope.casinosheet['p' + player_no + '_game_total'] == max)
      {
        return 'color: blue;';
      }

      //Always check the last auction total score
      min = $scope.casinosheet.p1_game_total;

      if($scope.casinosheet.p2_game_total < min)
      {
        min = $scope.casinosheet.p2_game_total;
      }

      if($scope.casinosheet.p3_game_total < min && $scope.casinosheet.showThirdPlayer)
      {
        min = $scope.casinosheet.p3_game_total;
      }

      if($scope.casinosheet.p4_game_total < min && $scope.casinosheet.showFourthPlayer)
      {
        min = $scope.casinosheet.p4_game_total;
      }

      if($scope.casinosheet['p' + player_no + '_game_total'] == min)
      {
        return 'color: red;';
      }
    }
  }

  $scope.getMaxScore = function()
  {
    var max = 0;

    if($scope.casinosheet.p1_game_total >= max)
    {
      max = $scope.casinosheet.p1_game_total;
    }

    if($scope.casinosheet.p2_game_total >= max)
    {
      max = $scope.casinosheet.p2_game_total;
    }

    if($scope.casinosheet.p3_game_total >= max)
    {
      max = $scope.casinosheet.p3_game_total;
    }

    if($scope.casinosheet.p4_game_total >= max)
    {
      max = $scope.casinosheet.p4_game_total;
    }

    return max;
  }

  $scope.getMaxPlayers = function(max)
  {
    var max_players = [];

    if($scope.casinosheet.p1_game_total == max)
    {
      max_players.push('1');
    }

    if($scope.casinosheet.p3_game_total == max)
    {
      max_players.push('3');
    }

    if($scope.casinosheet.p4_game_total == max)
    {
      max_players.push('4');
    }

    if($scope.casinosheet.p2_game_total == max)
    {
      max_players.push('2');
    }

    return max_players;
  }


  $scope.checkTotalForVictory = function()
  {
    var has_victory = false,
        max = 0,
        winner = "";

    max = $scope.getMaxScore();

    if(max < $scope.casinosheet.targetScore)  //Target score não foi atingida - partida seguinte
    {
      $scope.addCasinoGame();
      has_victory = true;
    }
    else
    {
      if($scope.getMaxPlayers(max).length == 1)  //Um só vencedor - incrementar vitória e recomeçar
      {
        var winner_model = "p" + $scope.getMaxPlayers(max)[0] + "_game_victories",
            winner_name = "p" + $scope.getMaxPlayers(max)[0] + "_name";

        $scope.casinosheet[winner_model]++;

        $scope.casinosheet.winner = $scope.casinosheet[winner_name] + "!";

        /*alert("Vencedor(a): " + $scope.casinosheet[winner_name] + "!"); */

        //$scope.restartCasinoScores();
        $scope.openCasinoModal(16);
      }
      else 
      {
        if(!$scope.casinosheet.showThirdPlayer) //Empate com 2 jogadores
        {
          /*alert("Empate! Vence quem tiver mais pontos na próxima partida."); */

          //$scope.addCasinoGame();      //partida seguinte (até ganhar)
          $scope.openCasinoModal(17);
          has_victory = true;
        }
        else // empate com + de 2 jogadores, Modal com o vector de $scope.getMaxPlayers(max)
        {
          $scope.casinosheet.playersMaxScore = $scope.getMaxPlayers(max);

          $scope.openCasinoModal(14);
        }
      }
    } 

    //if no scores matched the target score
    return has_victory;
  }

  $scope.pushSingleWinner = function(winner)
  {
    //alert("Winner is " + winner);
    $scope.casinosheet.winners = [];
    //$scope.casinosheet[winner + '_game_victories']++;

    $scope.casinosheet.winners.push(winner);
  }

  $scope.pushMultipleWinners = function(winners)
  {
    $scope.casinosheet.winners = [];

    for(var i = 0; i < winners.length; i++)
    {
      $scope.casinosheet.winners.push(winners[i]);
    }
  }

  $scope.addVictoryToWinners = function()
  {
    for(var i = 0; i < $scope.casinosheet.winners.length; i++)
    {
      $scope.casinosheet[$scope.casinosheet.winners[i] + '_game_victories']++;
    }
  }

  $scope.getWinnerFromModal = function()
  {
    for(var i = 0; i < scope.casinosheet.playersMaxScore; i++)
    {

    }

  }

  $scope.initCasinoScores = function()
  {
    //Totais
    $scope.casinosheet.p1_game_total = 0;
    $scope.casinosheet.p2_game_total = 0;
    $scope.casinosheet.p3_game_total = 0;
    $scope.casinosheet.p4_game_total = 0;

    //Victories
    $scope.casinosheet.p1_game_victories = 0;
    $scope.casinosheet.p2_game_victories = 0;
    $scope.casinosheet.p3_game_victories = 0;
    $scope.casinosheet.p4_game_victories = 0;

    //Game counter
    $scope.casinosheet.current_game = 1;

    //Hide 3rd and 4th player by default
    $scope.casinosheet.showThirdPlayer = 0;
    $scope.casinosheet.showFourthPlayer = 0;

    //Winner
    $scope.casinosheet.winner_name_modal = "0";

    //Configurations
    $scope.casinosheet.playerNumbers = [
    { text: "2", value: "2P"},
    { text: "3", value: "3P"},
    { text: "4", value: "4P"}
    ];

    $scope.casinosheet.gameList = [
    { number: 1, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, total_model: 0 }
    ];

    $scope.casinosheet.playerData = {
      players: '2P'
    };

    $scope.casinosheet.targetScore = 21;

    $scope.casinosheet.playersMaxScore = [];

    $scope.casinosheet.winners = [];

    $scope.casinosheet.p1_name = "Nós";
    $scope.casinosheet.p2_name = "Eles";

    $scope.casinosheet.winner = "";
    
  };

  $scope.calculateWinner = function()
  {
    //First, search the totals for a number equal to the max score.
    //If no total equals the match score, ask the user who won:
    openCasinoModal(14);
  }

  $scope.setWinnerFromModal = function()
  {
    var winner = "";

    if($scope.casinosheet.winner_name_modal == "1")
    {
      winner = $scope.casinosheet.p1_name;

      $scope.casinosheet.p1_game_victories++;
    }else if($scope.casinosheet.winner_name_modal == "2")
    {
      winner = $scope.casinosheet.p2_name;

      $scope.casinosheet.p2_game_victories++;
    }else if($scope.casinosheet.winner_name_modal == "3")
    {
      winner = $scope.casinosheet.p3_name;

      $scope.casinosheet.p3_game_victories++;
    }else if($scope.casinosheet.winner_name_modal == "4")
    {
      winner = $scope.casinosheet.p4_name;

      $scope.casinosheet.p4_game_victories++;
    }

    alert("Vencedor(a): " + winner);

    $scope.restartCasinoScores();
  }

  //Called when a new game starts
  $scope.restartCasinoScores = function()
  {
    //Game counter
    $scope.casinosheet.current_game = 1;

    //Game rows
    $scope.casinosheet.gameList = [
    { number: 1, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, total_model: 0 }
    ];

    //Totais
    $scope.casinosheet.p1_game_total = 0;
    $scope.casinosheet.p2_game_total = 0;
    $scope.casinosheet.p3_game_total = 0;
    $scope.casinosheet.p4_game_total = 0;

    $scope.casinosheet.winners = [];
  };

  $scope.getGameTotalScore = function(game_no)
  {

  };

  $scope.playerNumberChange = function(item) 
  {
    //console.log("Number of players:", item.text, "value:", item.value);
    //console.log($scope.casinosheet.playerData.players);

    switch($scope.casinosheet.playerData.players)
    {
      case '3P':
      {
        $scope.casinosheet.showThirdPlayer = 1;
        $scope.casinosheet.showFourthPlayer = 0;
        $scope.casinosheet.p1_name = "Jog. 1";
        $scope.casinosheet.p2_name = "Jog. 3";
        $scope.casinosheet.p3_name = "Jog. 2";
        break;
      }
      case '4P':
      {
        $scope.casinosheet.showThirdPlayer = 1;
        $scope.casinosheet.showFourthPlayer = 1;
        $scope.casinosheet.p1_name = "Jog. 1";
        $scope.casinosheet.p2_name = "Jog. 4";
        $scope.casinosheet.p3_name = "Jog. 2";
        $scope.casinosheet.p4_name = "Jog. 3";
        break;
      }
      default:
      {
        $scope.casinosheet.showThirdPlayer = 0;
        $scope.casinosheet.showFourthPlayer = 0;
        $scope.casinosheet.p1_name = "Nós";
        $scope.casinosheet.p2_name = "Eles";
        break;
      }
    }
  };

  $scope.targetScoreChange = function(item) 
  {
    console.log("Target Score:", item.text, "value:", item.value);
    console.log($scope.targetScoreData.targetScore);
  };

  //Reset the scores
  $scope.initCasinoScores();

  $scope.casinosheet.p1_name = "Nós";
  $scope.casinosheet.p2_name = "Eles";
  $scope.casinosheet.p3_name = "Jog. 3";
  $scope.casinosheet.p4_name = "Jog. 4";

  $scope.$watch('casinosheet.p1_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('casinosheet.p2_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('casinosheet.p3_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  /*$scope.addPlayer = function()
  {
    if($scope.casinosheet.showThirdPlayer == 1)
    {
      $scope.casinosheet.showFourthPlayer = 1;
    }
    else
    {
      $scope.casinosheet.showThirdPlayer = 1;
    }
  }*/


  $scope.calculateGameTotal = function(game_number)
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_game = 'p1_game_' + game_number,
        p2_game = 'p2_game_' + game_number,
        p3_game = 'p3_game_' + game_number,
        p1_game_score = $scope.casinosheet[p1_game],
        p2_game_score = $scope.casinosheet[p2_game],
        p3_game_score = $scope.casinosheet[p3_game],
        total = 0,
        total_game_model = 'total_game_' + game_number;

        if(p1_game_score != undefined)
        {
          if(!isNaN(p1_game_score))
          {
            total += p1_game_score;
          }
        }
        
        if(p2_game_score != undefined)
        {
          if(!isNaN(p2_game_score))
          {
            total += p2_game_score;
          }
        }

        if(p3_game_score != undefined)
        {
          if(!isNaN(p3_game_score))
          {
            total += p3_game_score;
          }
        }

        console.log(p1_game_score);
        console.log(p2_game_score);
        console.log(p3_game_score);
        console.log(total);

    $scope.casinosheet[total_game_model] = total;
  }

  $scope.changeGameTotalColor = function(game_number)
  {
    var game_no = game_number - 1;

    if($scope.casinosheet.gameList[game_no].total_model >= 11)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.updateGameRowTotal = function(game_row, player_no) 
  {
      //Update row (right) total
      for(var i = 0; i < $scope.casinosheet.gameList.length; i++) 
      {
        if($scope.casinosheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.casinosheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.casinosheet.gameList[i].p1_model;
          }

          if($scope.casinosheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.casinosheet.gameList[i].p2_model;
          }

          if($scope.casinosheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.casinosheet.gameList[i].p3_model;
          }

          if($scope.casinosheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.casinosheet.gameList[i].p4_model;
          }

          $scope.casinosheet.gameList[i].total_model = total_game_row;
        }
      }

      switch(player_no)
      {
        /*case 1: //Update the total for player 1
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.casinosheet.gameList.length; i++) 
          {
              if($scope.casinosheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.casinosheet.gameList[i].p1_model;
              }
          }

          $scope.casinosheet.p1_game_total = total_game_player_1;

          break;
        }*/
        case 2: //Update the total for player 2
        {
          var total_game_player_2 = 0;

          for(var i = 0; i < $scope.casinosheet.gameList.length; i++) 
          {
              if($scope.casinosheet.gameList[i].p2_model != undefined)
              {
                total_game_player_2 += $scope.casinosheet.gameList[i].p2_model;
              }
          }

          $scope.casinosheet.p2_game_total = total_game_player_2;

          break;
        }
        case 3: //Update the total for player 3
        {
          var total_game_player_3 = 0;

          for(var i = 0; i < $scope.casinosheet.gameList.length; i++) 
          {
              if($scope.casinosheet.gameList[i].p3_model != undefined)
              {
                total_game_player_3 += $scope.casinosheet.gameList[i].p3_model;
              }
          }

          $scope.casinosheet.p3_game_total = total_game_player_3;

          break;
        }
        case 4: //Update the total for player 4
        {
          var total_game_player_4 = 0;

          for(var i = 0; i < $scope.casinosheet.gameList.length; i++) 
          {
              if($scope.casinosheet.gameList[i].p4_model != undefined)
              {
                total_game_player_4 += $scope.casinosheet.gameList[i].p4_model;
              }
          }

          $scope.casinosheet.p4_game_total = total_game_player_4;

          break;
        }
        default:
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.casinosheet.gameList.length; i++) 
          {
              if($scope.casinosheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.casinosheet.gameList[i].p1_model;
              }
          }

          $scope.casinosheet.p1_game_total = total_game_player_1;

          break;
        }
      }

      for(var i = 0; i < $scope.casinosheet.gameList.length; i++) 
      {
        if($scope.casinosheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.casinosheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.casinosheet.gameList[i].p1_model;
          }

          if($scope.casinosheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.casinosheet.gameList[i].p2_model;
          }

          if($scope.casinosheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.casinosheet.gameList[i].p3_model;
          }

          if($scope.casinosheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.casinosheet.gameList[i].p4_model;
          }

          $scope.casinosheet.gameList[i].total_model = total_game_row;
        }
      }



      //alert(game_row);
  };
  
})



// ||||||||||||||||||||||||||||||||||||-- COPAS LOGIC --||||||||||||||||||||||||||||||||||||

.controller('copasCtrl', function($scope, $stateParams) 
{

  //$scope = $scope;

  //$scope.showBannerAdView();

  $scope.showBannerAdView();

  $scope.addCopasGame = function()
  {
    $scope.copassheet.current_game++;

    $scope.copassheet.gameList.push({ 
      number: $scope.copassheet.current_game,
      text: "# " + String($scope.copassheet.current_game), 
      p1_model: 0,
      p2_model: 0,
      p3_model: 0,
      p4_model: 0,
      total_model: 0
       });
  };

  $scope.setColorFromScore = function(player_no)
  {

    if($scope.copassheet.p1_game_total == $scope.copassheet.p2_game_total
      && $scope.copassheet.p2_game_total == $scope.copassheet.p3_game_total
      && $scope.copassheet.p3_game_total == $scope.copassheet.p4_game_total)
    {
      return 'color: black;';
    }
    else
    {
      var max, min;

      //Always check the last auction total score
      max = $scope.copassheet.p1_game_total;

      if($scope.copassheet.p2_game_total > max)
      {
        max = $scope.copassheet.p2_game_total;
      }

      if($scope.copassheet.p3_game_total > max && $scope.copassheet.showThirdPlayer)
      {
        max = $scope.copassheet.p3_game_total;
      }

      if($scope.copassheet.p4_game_total > max && $scope.copassheet.showFourthPlayer)
      {
        max = $scope.copassheet.p4_game_total;
      }

      if($scope.copassheet['p' + player_no + '_game_total'] == max)
      {
        return 'color: red;';
      }

      //Always check the last auction total score
      min = $scope.copassheet.p1_game_total;

      if($scope.copassheet.p2_game_total < min)
      {
        min = $scope.copassheet.p2_game_total;
      }

      if($scope.copassheet.p3_game_total < min && $scope.copassheet.showThirdPlayer)
      {
        min = $scope.copassheet.p3_game_total;
      }

      if($scope.copassheet.p4_game_total < min && $scope.copassheet.showFourthPlayer)
      {
        min = $scope.copassheet.p4_game_total;
      }

      if($scope.copassheet['p' + player_no + '_game_total'] == min)
      {
        return 'color: blue;';
      }
    }
  }

  $scope.getMaxScore = function()
  {
    var max = 0;

    if($scope.copassheet.p1_game_total >= max)
    {
      max = $scope.copassheet.p1_game_total;
    }

    if($scope.copassheet.p2_game_total >= max)
    {
      max = $scope.copassheet.p2_game_total;
    }

    if($scope.copassheet.p3_game_total >= max && $scope.copassheet.showThirdPlayer)
    {
      max = $scope.copassheet.p3_game_total;
    }

    if($scope.copassheet.p4_game_total >= max && $scope.copassheet.showFourthPlayer)
    {
      max = $scope.copassheet.p4_game_total;
    }

    return max;
  }

  $scope.getMaxPlayers = function(max)
  {
    var max_players = [];

    if($scope.copassheet.p1_game_total == max)
    {
      max_players.push('1');
    }

    if($scope.copassheet.p3_game_total == max && $scope.copassheet.showThirdPlayer)
    {
      max_players.push('3');
    }

    if($scope.copassheet.p4_game_total == max && $scope.copassheet.showFourthPlayer)
    {
      max_players.push('4');
    }

    if($scope.copassheet.p2_game_total == max)
    {
      max_players.push('2');
    }

    return max_players;
  }

  $scope.getMinPlayers = function()
  {
    var min_players = [], 
        min = $scope.copassheet.p1_game_total;

    if($scope.copassheet.p2_game_total < min)
    {
      min = $scope.copassheet.p2_game_total;
    }

    if($scope.copassheet.p3_game_total < min && $scope.copassheet.showThirdPlayer)
    {
      min = $scope.copassheet.p3_game_total;
    }

    if($scope.copassheet.p4_game_total < min && $scope.copassheet.showFourthPlayer)
    {
      min = $scope.copassheet.p4_game_total;
    }

    if($scope.copassheet.p1_game_total == min)
    {
      min_players.push('1');
    }

    if($scope.copassheet.p3_game_total == min && $scope.copassheet.showThirdPlayer)
    {
      min_players.push('3');
    }

    if($scope.copassheet.p4_game_total == min && $scope.copassheet.showFourthPlayer)
    {
      min_players.push('4');
    }

    if($scope.copassheet.p2_game_total == min)
    {
      min_players.push('2');
    }

    return min_players;
  }


  $scope.checkTotalForVictory = function()
  {
    var has_victory = false,
        max = 0,
        winner = "";

    max = $scope.getMaxScore();

    if(max < $scope.copassheet.targetScore)  //Target score não foi atingida - partida seguinte
    {
      $scope.addCopasGame();
      has_victory = true;
    }
    else
    {

      var playersWithMinScore = $scope.getMinPlayers();

      var numberOfPlayersWithMinScore = playersWithMinScore.length;

      if(numberOfPlayersWithMinScore > 1) //Empate com 2 ou mais jogadores
      {
        //Informar o utilizador que houve um empate, e continuar a jogar até só haver 1 vencedor
        $scope.openCopasModal(30);
        //has_victory = true;
      }
      else
      {
        var winner_model = "p" + playersWithMinScore[0] + "_game_victories",
            winner_name = "p" + playersWithMinScore[0] + "_name";

        $scope.copassheet[winner_model]++;

        $scope.copassheet.winner = $scope.copassheet[winner_name] + "!";

        //alert("Vencedor(a): " + $scope.copassheet[winner_name] + "!");

        //$scope.restartCopasScores();
        $scope.openCopasModal(29);
      }

      //alert('Players with min score: ' + numberOfPlayersWithMinScore);

      /*if($scope.getMaxPlayers(max).length == 1)  //Um só vencedor - incrementar vitória e recomeçar
      {
        var winner_model = "p" + $scope.getMaxPlayers(max)[4] + "_game_victories",
            winner_name = "p" + $scope.getMaxPlayers(max)[] + "_name";

        $scope.copassheet[winner_model]++;

        $scope.copassheet.winner = $scope.copassheet[winner_name] + "!";

        //alert("Vencedor(a): " + $scope.copassheet[winner_name] + "!");

        //$scope.restartCopasScores();
        $scope.openCopasModal(16);
      }
      else 
      {
        if(!$scope.copassheet.showThirdPlayer) //Empate com 2 jogadores
        {
          //alert("Empate! Vence quem tiver mais pontos na próxima partida.");

          //$scope.addCopasGame();      //partida seguinte (até ganhar)
          $scope.openCopasModal(17);
          has_victory = true;
        }
        else // empate com + de 2 jogadores, Modal com o vector de $scope.getMaxPlayers(max)
        {
          $scope.copassheet.playersMaxScore = $scope.getMaxPlayers(max);

          $scope.openCopasModal(14);
        }
      }*/
    } 

    //if no scores matched the target score
    return has_victory;
  }

  $scope.pushSingleWinner = function(winner)
  {
    //alert("Winner is " + winner);
    $scope.copassheet.winners = [];
    //$scope.copassheet[winner + '_game_victories']++;

    $scope.copassheet.winners.push(winner);
  }

  $scope.pushMultipleWinners = function(winners)
  {
    $scope.copassheet.winners = [];

    for(var i = 0; i < winners.length; i++)
    {
      $scope.copassheet.winners.push(winners[i]);
    }
  }

  $scope.addVictoryToWinners = function()
  {
    for(var i = 0; i < $scope.copassheet.winners.length; i++)
    {
      $scope.copassheet[$scope.copassheet.winners[i] + '_game_victories']++;
    }
  }

  $scope.getWinnerFromModal = function()
  {
    for(var i = 0; i < scope.copassheet.playersMaxScore; i++)
    {

    }

  }

  $scope.initCopasScores = function()
  {
    //Totais
    $scope.copassheet.p1_game_total = 0;
    $scope.copassheet.p2_game_total = 0;
    $scope.copassheet.p3_game_total = 0;
    $scope.copassheet.p4_game_total = 0;

    //Victories
    $scope.copassheet.p1_game_victories = 0;
    $scope.copassheet.p2_game_victories = 0;
    $scope.copassheet.p3_game_victories = 0;
    $scope.copassheet.p4_game_victories = 0;

    //Game counter
    $scope.copassheet.current_game = 1;

    //Hide 3rd and 4th player by default
    $scope.copassheet.showThirdPlayer = 0;
    $scope.copassheet.showFourthPlayer = 0;

    //Winner
    $scope.copassheet.winner_name_modal = "0";

    //Configurations
    $scope.copassheet.playerNumbers = [
    { text: "2", value: "2P"},
    //{ text: "3", value: "3P"},
    { text: "4", value: "4P"}
    ];

    $scope.copassheet.gameList = [
    { number: 1, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, total_model: 0 }
    ];

    $scope.copassheet.playerData = {
      players: '2P'
    };

    $scope.copassheet.targetScore = 100;

    $scope.copassheet.playersMaxScore = [];

    $scope.copassheet.winners = [];

    $scope.copassheet.p1_name = "Nós";
    $scope.copassheet.p2_name = "Eles";

    $scope.copassheet.winner = "";
    
  };

  $scope.calculateWinner = function()
  {
    //First, search the totals for a number equal to the max score.
    //If no total equals the match score, ask the user who won:
    openCopasModal(14);
  }

  $scope.setWinnerFromModal = function()
  {
    var winner = "";

    if($scope.copassheet.winner_name_modal == "1")
    {
      winner = $scope.copassheet.p1_name;

      $scope.copassheet.p1_game_victories++;
    }else if($scope.copassheet.winner_name_modal == "2")
    {
      winner = $scope.copassheet.p2_name;

      $scope.copassheet.p2_game_victories++;
    }else if($scope.copassheet.winner_name_modal == "3")
    {
      winner = $scope.copassheet.p3_name;

      $scope.copassheet.p3_game_victories++;
    }else if($scope.copassheet.winner_name_modal == "4")
    {
      winner = $scope.copassheet.p4_name;

      $scope.copassheet.p4_game_victories++;
    }

    alert("Vencedor(a): " + winner);

    $scope.restartCopasScores();
  }

  //Called when a new game starts
  $scope.restartCopasScores = function()
  {
    //Game counter
    $scope.copassheet.current_game = 1;

    //Game rows
    $scope.copassheet.gameList = [
    { number: 1, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, total_model: 0 }
    ];

    //Totais
    $scope.copassheet.p1_game_total = 0;
    $scope.copassheet.p2_game_total = 0;
    $scope.copassheet.p3_game_total = 0;
    $scope.copassheet.p4_game_total = 0;

    $scope.copassheet.winners = [];
  };

  $scope.getGameTotalScore = function(game_no)
  {

  };

  $scope.playerNumberChange = function(item) 
  {
    //console.log("Number of players:", item.text, "value:", item.value);
    //console.log($scope.copassheet.playerData.players);

    switch($scope.copassheet.playerData.players)
    {
      case '3P':
      {
        $scope.copassheet.showThirdPlayer = 1;
        $scope.copassheet.showFourthPlayer = 0;
        $scope.copassheet.p1_name = "Jog. 1";
        $scope.copassheet.p2_name = "Jog. 3";
        $scope.copassheet.p3_name = "Jog. 2";
        break;
      }
      case '4P':
      {
        $scope.copassheet.showThirdPlayer = 1;
        $scope.copassheet.showFourthPlayer = 1;
        $scope.copassheet.p1_name = "Jog. 1";
        $scope.copassheet.p2_name = "Jog. 4";
        $scope.copassheet.p3_name = "Jog. 2";
        $scope.copassheet.p4_name = "Jog. 3";
        break;
      }
      default:
      {
        $scope.copassheet.showThirdPlayer = 0;
        $scope.copassheet.showFourthPlayer = 0;
        $scope.copassheet.p1_name = "Nós";
        $scope.copassheet.p2_name = "Eles";
        break;
      }
    }
  };

  $scope.targetScoreChange = function(item) 
  {
    console.log("Target Score:", item.text, "value:", item.value);
    console.log($scope.targetScoreData.targetScore);
  };

  //Reset the scores
  $scope.initCopasScores();

  $scope.copassheet.p1_name = "Nós";
  $scope.copassheet.p2_name = "Eles";
  $scope.copassheet.p3_name = "Jog. 3";
  $scope.copassheet.p4_name = "Jog. 4";

  $scope.$watch('copassheet.p1_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('copassheet.p2_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('copassheet.p3_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  /*$scope.addPlayer = function()
  {
    if($scope.copassheet.showThirdPlayer == 1)
    {
      $scope.copassheet.showFourthPlayer = 1;
    }
    else
    {
      $scope.copassheet.showThirdPlayer = 1;
    }
  }*/


  $scope.calculateGameTotal = function(game_number)
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_game = 'p1_game_' + game_number,
        p2_game = 'p2_game_' + game_number,
        p3_game = 'p3_game_' + game_number,
        p1_game_score = $scope.copassheet[p1_game],
        p2_game_score = $scope.copassheet[p2_game],
        p3_game_score = $scope.copassheet[p3_game],
        total = 0,
        total_game_model = 'total_game_' + game_number;

        if(p1_game_score != undefined)
        {
          if(!isNaN(p1_game_score))
          {
            total += p1_game_score;
          }
        }
        
        if(p2_game_score != undefined)
        {
          if(!isNaN(p2_game_score))
          {
            total += p2_game_score;
          }
        }

        if(p3_game_score != undefined)
        {
          if(!isNaN(p3_game_score))
          {
            total += p3_game_score;
          }
        }

        console.log(p1_game_score);
        console.log(p2_game_score);
        console.log(p3_game_score);
        console.log(total);

    $scope.copassheet[total_game_model] = total;
  }

  $scope.changeGameTotalColor = function(game_number)
  {
    var game_no = game_number - 1;

    if($scope.copassheet.gameList[game_no].total_model == 26 || $scope.copassheet.gameList[game_no].total_model == 78)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.updateGameRowTotal = function(game_row, player_no) 
  {
      //Update row (right) total
      for(var i = 0; i < $scope.copassheet.gameList.length; i++) 
      {
        if($scope.copassheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.copassheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.copassheet.gameList[i].p1_model;
          }

          if($scope.copassheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.copassheet.gameList[i].p2_model;
          }

          if($scope.copassheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.copassheet.gameList[i].p3_model;
          }

          if($scope.copassheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.copassheet.gameList[i].p4_model;
          }

          $scope.copassheet.gameList[i].total_model = total_game_row;
        }
      }

      switch(player_no)
      {
        /*case 1: //Update the total for player 1
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.copassheet.gameList.length; i++) 
          {
              if($scope.copassheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.copassheet.gameList[i].p1_model;
              }
          }

          $scope.copassheet.p1_game_total = total_game_player_1;

          break;
        }*/
        case 2: //Update the total for player 2
        {
          var total_game_player_2 = 0;

          for(var i = 0; i < $scope.copassheet.gameList.length; i++) 
          {
              if($scope.copassheet.gameList[i].p2_model != undefined)
              {
                total_game_player_2 += $scope.copassheet.gameList[i].p2_model;
              }
          }

          $scope.copassheet.p2_game_total = total_game_player_2;

          break;
        }
        case 3: //Update the total for player 3
        {
          var total_game_player_3 = 0;

          for(var i = 0; i < $scope.copassheet.gameList.length; i++) 
          {
              if($scope.copassheet.gameList[i].p3_model != undefined)
              {
                total_game_player_3 += $scope.copassheet.gameList[i].p3_model;
              }
          }

          $scope.copassheet.p3_game_total = total_game_player_3;

          break;
        }
        case 4: //Update the total for player 4
        {
          var total_game_player_4 = 0;

          for(var i = 0; i < $scope.copassheet.gameList.length; i++) 
          {
              if($scope.copassheet.gameList[i].p4_model != undefined)
              {
                total_game_player_4 += $scope.copassheet.gameList[i].p4_model;
              }
          }

          $scope.copassheet.p4_game_total = total_game_player_4;

          break;
        }
        default:
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.copassheet.gameList.length; i++) 
          {
              if($scope.copassheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.copassheet.gameList[i].p1_model;
              }
          }

          $scope.copassheet.p1_game_total = total_game_player_1;

          break;
        }
      }

      for(var i = 0; i < $scope.copassheet.gameList.length; i++) 
      {
        if($scope.copassheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.copassheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.copassheet.gameList[i].p1_model;
          }

          if($scope.copassheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.copassheet.gameList[i].p2_model;
          }

          if($scope.copassheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.copassheet.gameList[i].p3_model;
          }

          if($scope.copassheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.copassheet.gameList[i].p4_model;
          }

          $scope.copassheet.gameList[i].total_model = total_game_row;
        }
      }



      //alert(game_row);
  };
  
})

// ||||||||||||||||||||||||||||||||||||-- KING LOGIC --||||||||||||||||||||||||||||||||||||

.controller('kingCtrl', function($scope, $stateParams) 
{

  $scope.showBannerAdView();

  $scope.initKingScores = function()
  {
    //No tricks
    $scope.kingsheet.p1_notricks = 0;
    $scope.kingsheet.p2_notricks = 0;
    $scope.kingsheet.p3_notricks = 0;
    $scope.kingsheet.p4_notricks = 0;

    //hearts
    $scope.kingsheet.p1_hearts = 0;
    $scope.kingsheet.p2_hearts = 0;
    $scope.kingsheet.p3_hearts = 0;
    $scope.kingsheet.p4_hearts = 0;

    //Dames
    $scope.kingsheet.p1_dames = 0;
    $scope.kingsheet.p2_dames = 0;
    $scope.kingsheet.p3_dames = 0;
    $scope.kingsheet.p4_dames = 0;

    //Gents
    $scope.kingsheet.p1_gents = 0;
    $scope.kingsheet.p2_gents = 0;
    $scope.kingsheet.p3_gents = 0;
    $scope.kingsheet.p4_gents = 0;

    //King
    $scope.kingsheet.p1_king = 0;
    $scope.kingsheet.p2_king = 0;
    $scope.kingsheet.p3_king = 0;
    $scope.kingsheet.p4_king = 0;

    //Last 2
    $scope.kingsheet.p1_last_2 = 0;
    $scope.kingsheet.p2_last_2 = 0;
    $scope.kingsheet.p3_last_2 = 0;
    $scope.kingsheet.p4_last_2 = 0;

    //First auction
    $scope.kingsheet.p1_first_auction = 0;
    $scope.kingsheet.p2_first_auction = 0;
    $scope.kingsheet.p3_first_auction = 0;
    $scope.kingsheet.p4_first_auction = 0;

    //Second auction
    $scope.kingsheet.p1_second_auction = 0;
    $scope.kingsheet.p2_second_auction = 0;
    $scope.kingsheet.p3_second_auction = 0;
    $scope.kingsheet.p4_second_auction = 0;

    //Third auction
    $scope.kingsheet.p1_third_auction = 0;
    $scope.kingsheet.p2_third_auction = 0;
    $scope.kingsheet.p3_third_auction = 0;
    $scope.kingsheet.p4_third_auction = 0;

    //Fourth auction
    $scope.kingsheet.p1_fourth_auction = 0;
    $scope.kingsheet.p2_fourth_auction = 0;
    $scope.kingsheet.p3_fourth_auction = 0;
    $scope.kingsheet.p4_fourth_auction = 0;

    $scope.kingsheet.first_auction_toggle = 0;
    $scope.kingsheet.second_auction_toggle = 0;
    $scope.kingsheet.third_auction_toggle = 0;
    $scope.kingsheet.fourth_auction_toggle = 0;

    $scope.kingsheet.p1_name = "";
    $scope.kingsheet.p2_name = "";
    $scope.kingsheet.p3_name = "";
    $scope.kingsheet.p4_name = "";

    $scope.kingsheet.winnersInOrder = [];
  }

  $scope.setColorFromScore = function(player_no)
  {

    if($scope.kingsheet.p1_fourth_auction_total == $scope.kingsheet.p2_fourth_auction_total
      && $scope.kingsheet.p2_fourth_auction_total == $scope.kingsheet.p3_fourth_auction_total
      && $scope.kingsheet.p3_fourth_auction_total == $scope.kingsheet.p4_fourth_auction_total)
    {
      return 'color: black;';
    }
    else
    {
      var max, min;

      //Always check the last auction total score
      max = $scope.kingsheet.p1_fourth_auction_total;

      if($scope.kingsheet.p2_fourth_auction_total > max)
      {
        max = $scope.kingsheet.p2_fourth_auction_total;
      }

      if($scope.kingsheet.p3_fourth_auction_total > max)
      {
        max = $scope.kingsheet.p3_fourth_auction_total;
      }

      if($scope.kingsheet.p4_fourth_auction_total > max)
      {
        max = $scope.kingsheet.p4_fourth_auction_total;
      }

      if($scope.kingsheet['p' + player_no + '_fourth_auction_total'] == max)
      {
        return 'color: blue;';
      }

      //Always check the last auction total score
      min = $scope.kingsheet.p1_fourth_auction_total;

      if($scope.kingsheet.p2_fourth_auction_total < min)
      {
        min = $scope.kingsheet.p2_fourth_auction_total;
      }

      if($scope.kingsheet.p3_fourth_auction_total < min)
      {
        min = $scope.kingsheet.p3_fourth_auction_total;
      }

      if($scope.kingsheet.p4_fourth_auction_total < min)
      {
        min = $scope.kingsheet.p4_fourth_auction_total;
      }

      if($scope.kingsheet['p' + player_no + '_fourth_auction_total'] == min)
      {
        return 'color: red;';
      }
    }
  }


  $scope.calculateKingWinnerOrder = function()
  {

  }


  //Reset the scores
  $scope.initKingScores();

  //When the user enters the number of tricks - convert them to score.
  //When the user clicks on a cell, convert the score back to tricks

  //################################# MODAL FUNCTIONS #################################
  $scope.getGameName = function(ng_model_name)
  {
    var ng_model_name_array = ng_model_name.split("_"),
        game_name = "";

    game_name = ng_model_name_array[1];

    //In the case of games like "last_2" or "third_auction"...

    if(game_name.indexOf('last') != -1 || game_name.indexOf('first') != -1 || game_name.indexOf('second') != -1 || game_name.indexOf('third') != -1 || game_name.indexOf('fourth') != -1)
    {
      game_name += "_" + ng_model_name_array[2];
    }

    return game_name;
  }

  //Called when the player presses the modal window button to increase a player score.
  $scope.increase = function(ng_model_name)
  {
    var game = $scope.getGameName(ng_model_name),
        max,
        desired_value = 0,
        model_p1 = "p1_" + game + "_modal",
        model_p2 = "p2_" + game + "_modal",
        model_p3 = "p3_" + game + "_modal",
        model_p4 = "p4_" + game + "_modal",
        total = 0;

    if($scope.kingsheet[model_p1] != undefined)
    {
      total += $scope.kingsheet[model_p1];
    }

    if($scope.kingsheet[model_p2] != undefined)
    {
      total += $scope.kingsheet[model_p2];
    }

    if($scope.kingsheet[model_p3] != undefined)
    {
      total += $scope.kingsheet[model_p3];
    }

    if($scope.kingsheet[model_p4] != undefined)
    {
      total += $scope.kingsheet[model_p4];
    }

    switch(game)
    {
      case 'notricks':
      {
        max = 13;
        desired_value = 13;

        break;
      }
      case 'hearts':
      {
        max = 13;
        desired_value = 13;

        break;
      }
      case 'dames':
      {
        max = 4;
        desired_value = 4;

        break;
      }
      case 'gents':
      {
        max = 8;
        desired_value = 8;

        break;
      }
      case 'king':
      {
        max = 1;
        desired_value = 1;

        break;
      }
      case 'last_2':
      {
        max = 2;
        desired_value = 2;

        break;
      }
      case 'first_auction':
      {
        max = 21;
        desired_value = 13;

        break;
      }
      case 'second_auction':
      {
        max = 21;
        desired_value = 13;

        break;
      }
      case 'third_auction':
      {
        max = 21;
        desired_value = 13;

        break;
      }
      case 'fourth_auction':
      {
        max = 21;
        desired_value = 13;

        break;
      }
    }

    if(total < max)
    {
      if($scope.kingsheet[ng_model_name] == undefined || $scope.kingsheet[ng_model_name] == 0)
      {
        $scope.kingsheet[ng_model_name] = 1;
      }
      else
      {
          $scope.kingsheet[ng_model_name]++;
      }
    }

    //Finally, update the "Total" value
   $scope.updateModalTotal(game, desired_value);
  }

  //Called when the player presses the modal window button to decrease a player score.
  $scope.decrease = function(ng_model_name)
  {
    var game = $scope.getGameName(ng_model_name),
        min,
        desired_value = 0,
        model_p1 = "p1_" + game + "_modal",
        model_p2 = "p2_" + game + "_modal",
        model_p3 = "p3_" + game + "_modal",
        model_p4 = "p4_" + game + "_modal",
        total = 0;

    if($scope.kingsheet[model_p1] != undefined)
    {
      total += $scope.kingsheet[model_p1];
    }

    if($scope.kingsheet[model_p2] != undefined)
    {
      total += $scope.kingsheet[model_p2];
    }

    if($scope.kingsheet[model_p3] != undefined)
    {
      total += $scope.kingsheet[model_p3];
    }

    if($scope.kingsheet[model_p4] != undefined)
    {
      total += $scope.kingsheet[model_p4];
    }

    switch(game)
    {
      case 'notricks':
      {
        min = 0;
        desired_value = 13;

        break;
      }
      case 'hearts':
      {
        min = 0;
        desired_value = 13;

        break;
      }
      case 'dames':
      {
        min = 0;
        desired_value = 4;

        break;
      }
      case 'gents':
      {
        min = 0;
        desired_value = 8;

        break;
      }
      case 'king':
      {
        min = 0;
        desired_value = 1;

        break;
      }
      case 'last_2':
      {
        min = 0;
        desired_value = 2;

        break;
      }
      case 'first_auction':
      {
        min = -21;
        desired_value = 13;

        break;
      }
      case 'second_auction':
      {
        min = -21;
        desired_value = 13;

        break;
      }
      case 'third_auction':
      {
        min = -21;
        desired_value = 13;

        break;
      }
      case 'fourth_auction':
      {
        min = -21;
        desired_value = 13;

        break;
      }
    }

    if(total > min)
    {
      if($scope.kingsheet[ng_model_name] == undefined || $scope.kingsheet[ng_model_name] == 0)
      {
        $scope.kingsheet[ng_model_name] = -1;
      }
      else
      {
        $scope.kingsheet[ng_model_name]--;
      }
    }

    //Finally, update the "Total" value
   $scope.updateModalTotal(game, desired_value);
  }

  //################################# NO TRICKS #################################
  $scope.calculateP1NoTricksScore = function()
  {
      $scope.kingsheet.p1_notricks = -$scope.kingsheet.p1_notricks * 20;
  }

  $scope.divideP1NoTricksScore = function()
  {
      /*highlightP1Name();*/

      if(!isNaN($scope.kingsheet.p1_notricks) && $scope.kingsheet.p1_notricks  != undefined)
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

      $scope.calculateP1FirstAuctionTotal();
      $scope.calculateP1SecondAuctionTotal();
      $scope.calculateP1ThirdAuctionTotal();
      $scope.calculateP1FourthAuctionTotal();
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

      $scope.calculateP2FirstAuctionTotal();
      $scope.calculateP2SecondAuctionTotal();
      $scope.calculateP2ThirdAuctionTotal();
      $scope.calculateP2FourthAuctionTotal();
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

      $scope.calculateP3FirstAuctionTotal();
      $scope.calculateP3SecondAuctionTotal();
      $scope.calculateP3ThirdAuctionTotal();
      $scope.calculateP3FourthAuctionTotal();
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

      $scope.calculateP4FirstAuctionTotal();
      $scope.calculateP4SecondAuctionTotal();
      $scope.calculateP4ThirdAuctionTotal();
      $scope.calculateP4FourthAuctionTotal();
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

      $scope.calculateP1SecondAuctionTotal();
      $scope.calculateP1ThirdAuctionTotal();
      $scope.calculateP1FourthAuctionTotal();
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

      $scope.calculateP2SecondAuctionTotal();
      $scope.calculateP2ThirdAuctionTotal();
      $scope.calculateP2FourthAuctionTotal();
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

      $scope.calculateP3SecondAuctionTotal();
      $scope.calculateP3ThirdAuctionTotal();
      $scope.calculateP3FourthAuctionTotal();
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

      $scope.calculateP4SecondAuctionTotal();
      $scope.calculateP4ThirdAuctionTotal();
      $scope.calculateP4FourthAuctionTotal();
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

      $scope.calculateP1ThirdAuctionTotal();
      $scope.calculateP1FourthAuctionTotal();
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

      $scope.calculateP2ThirdAuctionTotal();
      $scope.calculateP2FourthAuctionTotal();
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

      $scope.calculateP3ThirdAuctionTotal();
      $scope.calculateP3FourthAuctionTotal();
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

      $scope.calculateP4ThirdAuctionTotal();
      $scope.calculateP4FourthAuctionTotal();
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

      $scope.calculateP1FourthAuctionTotal();
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

      $scope.calculateP2FourthAuctionTotal();
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

      $scope.calculateP3FourthAuctionTotal();
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

      $scope.calculateP4FourthAuctionTotal();
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

  //Player 1 Auction totals

  $scope.calculateP1FirstAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP1SecondAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP1ThirdAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP1FourthAuctionTotal = function()
  {
      var total = 0;

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
  }

  //Player 2 Auction totals

  $scope.calculateP2FirstAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP2SecondAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP2ThirdAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP2FourthAuctionTotal = function()
  {
      var total = 0;

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
  }

  //Player 3 Auction totals

  $scope.calculateP3FirstAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP3SecondAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP3ThirdAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP3FourthAuctionTotal = function()
  {
      var total = 0;

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
  }

  //Player 4 Auction totals

  $scope.calculateP4FirstAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP4SecondAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP4ThirdAuctionTotal = function()
  {
      var total = 0;

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
  }

  $scope.calculateP4FourthAuctionTotal = function()
  {
      var total = 0;

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

  //Update each auction value if there is a change in the first part of the game (first totals)

  $scope.$watch('kingsheet.p1_first_total', function() 
  {
      $scope.calculateP1FirstAuctionTotal();
      $scope.calculateP1SecondAuctionTotal();
      $scope.calculateP1ThirdAuctionTotal();
      $scope.calculateP1FourthAuctionTotal();
  });

  $scope.$watch('kingsheet.p2_first_total', function() 
  {
      $scope.calculateP2FirstAuctionTotal();
      $scope.calculateP2SecondAuctionTotal();
      $scope.calculateP2ThirdAuctionTotal();
      $scope.calculateP2FourthAuctionTotal();
  });

  $scope.$watch('kingsheet.p3_first_total', function() 
  {
      $scope.calculateP3FirstAuctionTotal();
      $scope.calculateP3SecondAuctionTotal();
      $scope.calculateP3ThirdAuctionTotal();
      $scope.calculateP3FourthAuctionTotal();
  });

  $scope.$watch('kingsheet.p4_first_total', function() 
  {
      $scope.calculateP4FirstAuctionTotal();
      $scope.calculateP4SecondAuctionTotal();
      $scope.calculateP4ThirdAuctionTotal();
      $scope.calculateP4FourthAuctionTotal();
  });

  //Player 2


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
      $scope.calculateFirstAuctionTotal();
      $scope.calculateP1FirstAuctionTotal();
      $scope.calculateP1SecondAuctionTotal();
      $scope.calculateP1ThirdAuctionTotal();
      $scope.calculateP1FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p2_first_auction', function() 
  {
      $scope.calculateFirstAuctionTotal();
      $scope.calculateP2FirstAuctionTotal();
      $scope.calculateP2SecondAuctionTotal();
      $scope.calculateP2ThirdAuctionTotal();
      $scope.calculateP2FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p3_first_auction', function() 
  {
      $scope.calculateFirstAuctionTotal();
      $scope.calculateP3FirstAuctionTotal();
      $scope.calculateP3SecondAuctionTotal();
      $scope.calculateP3ThirdAuctionTotal();
      $scope.calculateP3FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p4_first_auction', function() 
  {
      $scope.calculateFirstAuctionTotal();
      $scope.calculateP4FirstAuctionTotal();
      $scope.calculateP4SecondAuctionTotal();
      $scope.calculateP4ThirdAuctionTotal();
      $scope.calculateP4FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p1_second_auction', function() 
  {
      $scope.calculateSecondAuctionTotal();
      $scope.calculateP1SecondAuctionTotal();
      $scope.calculateP1ThirdAuctionTotal();
      $scope.calculateP1FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p2_second_auction', function() 
  {
      $scope.calculateSecondAuctionTotal();
      $scope.calculateP2SecondAuctionTotal();
      $scope.calculateP2ThirdAuctionTotal();
      $scope.calculateP2FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p3_second_auction', function() 
  {
      $scope.calculateSecondAuctionTotal();
      $scope.calculateP3SecondAuctionTotal();
      $scope.calculateP3ThirdAuctionTotal();
      $scope.calculateP3FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p4_second_auction', function() 
  {
      $scope.calculateSecondAuctionTotal();
      $scope.calculateP4SecondAuctionTotal();
      $scope.calculateP4ThirdAuctionTotal();
      $scope.calculateP4FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p1_third_auction', function() 
  {
      $scope.calculateThirdAuctionTotal();
      $scope.calculateP1ThirdAuctionTotal();
      $scope.calculateP1FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p2_third_auction', function() 
  {
      $scope.calculateThirdAuctionTotal();
      $scope.calculateP2ThirdAuctionTotal();
      $scope.calculateP2FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p3_third_auction', function() 
  {
      $scope.calculateThirdAuctionTotal();
      $scope.calculateP3ThirdAuctionTotal();
      $scope.calculateP3FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p4_third_auction', function() 
  {
      $scope.calculateThirdAuctionTotal();
      $scope.calculateP4ThirdAuctionTotal();
      $scope.calculateP4FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p1_fourth_auction', function() 
  {
      $scope.calculateFourthAuctionTotal();
      $scope.calculateP1FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p2_fourth_auction', function() 
  {
      $scope.calculateFourthAuctionTotal();
      $scope.calculateP2FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p3_fourth_auction', function() 
  {
      $scope.calculateFourthAuctionTotal();
      $scope.calculateP3FourthAuctionTotal();
   });

  $scope.$watch('kingsheet.p4_fourth_auction', function() 
  {
      $scope.calculateFourthAuctionTotal();
      $scope.calculateP4FourthAuctionTotal();
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

  /*$scope.fourthAuctionToggle = function()
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
  }*/

  $scope.resetKingScores = function()
  {
    //No tricks
    $scope.kingsheet.p1_notricks = null;
    $scope.kingsheet.p2_notricks = null;
    $scope.kingsheet.p3_notricks = null;
    $scope.kingsheet.p4_notricks = null;
    $scope.kingsheet.notricks_total = null;

    //Hearts
    $scope.kingsheet.p1_hearts = null;
    $scope.kingsheet.p2_hearts = null;
    $scope.kingsheet.p3_hearts = null;
    $scope.kingsheet.p4_hearts = null;
    $scope.kingsheet.hearts_total = null;

    //Dames
    $scope.kingsheet.p1_dames = null;
    $scope.kingsheet.p2_dames = null;
    $scope.kingsheet.p3_dames = null;
    $scope.kingsheet.p4_dames = null;
    $scope.kingsheet.dames_total = null;

    //Gents
    $scope.kingsheet.p1_gents = null;
    $scope.kingsheet.p2_gents = null;
    $scope.kingsheet.p3_gents = null;
    $scope.kingsheet.p4_gents = null;
    $scope.kingsheet.gents_total = null;

    //King
    $scope.kingsheet.p1_king = null;
    $scope.kingsheet.p2_king = null;
    $scope.kingsheet.p3_king = null;
    $scope.kingsheet.p4_king = null;
    $scope.kingsheet.king_total = null;

    //Last 2
    $scope.kingsheet.p1_last_2 = null;
    $scope.kingsheet.p2_last_2 = null;
    $scope.kingsheet.p3_last_2 = null;
    $scope.kingsheet.p4_last_2 = null;
    $scope.kingsheet.last_2_total = null;

    //First totals
    $scope.kingsheet.first_totals = null;

    //First Auction
    $scope.kingsheet.p1_first_auction = null;
    $scope.kingsheet.p2_first_auction = null;
    $scope.kingsheet.p3_first_auction = null;
    $scope.kingsheet.p4_first_auction = null;
    $scope.kingsheet.first_auction_total = null;

    //Second Auction
    $scope.kingsheet.p1_second_auction = null;
    $scope.kingsheet.p2_second_auction = null;
    $scope.kingsheet.p3_second_auction = null;
    $scope.kingsheet.p4_second_auction = null;
    $scope.kingsheet.second_auction_total = null;

    //Third Auction
    $scope.kingsheet.p1_third_auction = null;
    $scope.kingsheet.p2_third_auction = null;
    $scope.kingsheet.p3_third_auction = null;
    $scope.kingsheet.p4_third_auction = null;
    $scope.kingsheet.third_auction_total = null;

    //Fourth Auction
    $scope.kingsheet.p1_fourth_auction = null;
    $scope.kingsheet.p2_fourth_auction = null;
    $scope.kingsheet.p3_fourth_auction = null;
    $scope.kingsheet.p4_fourth_auction = null;
    $scope.kingsheet.fourth_auction_total = null;

    //Reset toggle buttons
    $scope.kingsheet.first_auction_toggle = false;
    $scope.kingsheet.second_auction_toggle = false;
    $scope.kingsheet.third_auction_toggle = false; 
    $scope.kingsheet.fourth_auction_toggle = false;
  }

  $scope.changeNoTricksTotalColor = function()
  {
    if($scope.kingsheet.notricks_total == -260)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeHeartsTotalColor = function()
  {
    if($scope.kingsheet.hearts_total == -260)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeDamesTotalColor = function()
  {
    if($scope.kingsheet.dames_total == -200)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeGentsTotalColor = function()
  {
    if($scope.kingsheet.gents_total == -240)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeKingTotalColor = function()
  {
    if($scope.kingsheet.king_total == -160)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeLast2TotalColor = function()
  {
    if($scope.kingsheet.last_2_total == -180)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeFirstTotalsColor = function()
  {
    if($scope.kingsheet.first_totals == -1300)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeFirstAuctionTotalColor = function()
  {
    if($scope.kingsheet.first_auction_total == 325)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeSecondAuctionTotalColor = function()
  {
    if($scope.kingsheet.second_auction_total == 325)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeThirdAuctionTotalColor = function()
  {
    if($scope.kingsheet.third_auction_total == 325)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.changeFourthAuctionTotalColor = function()
  {
    if($scope.kingsheet.fourth_auction_total == 325)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.highlightP1Name = function()
  {

  }

})

// ||||||||||||||||||||||||||||||||||||-- GRELHA GERAL LOGIC --||||||||||||||||||||||||||||||||||||

.controller('geralCtrl', function($scope, $stateParams) 
{

  //$scope = $scope;

  //$scope.showBannerAdView();

  $scope.showBannerAdView();

  $scope.addGeralGame = function()
  {
    $scope.geralsheet.current_game++;

    $scope.geralsheet.gameList.push({ 
      number: $scope.geralsheet.current_game,
      text: "# " + String($scope.geralsheet.current_game), 
      p1_model: 0,
      p2_model: 0,
      p3_model: 0,
      p4_model: 0,
      p5_model: 0,
      total_model: 0
       });
  };

  $scope.setColorFromScore = function(player_no)
  {

    if($scope.geralsheet.p1_game_total == $scope.geralsheet.p2_game_total
      && $scope.geralsheet.p2_game_total == $scope.geralsheet.p3_game_total
      && $scope.geralsheet.p3_game_total == $scope.geralsheet.p4_game_total)
    {
      return 'color: black;';
    }
    else
    {
      var max, min;

      //Always check the last auction total score
      max = $scope.geralsheet.p1_game_total;

      if($scope.geralsheet.p2_game_total > max)
      {
        max = $scope.geralsheet.p2_game_total;
      }

      if($scope.geralsheet.p3_game_total > max && $scope.geralsheet.showThirdPlayer)
      {
        max = $scope.geralsheet.p3_game_total;
      }

      if($scope.geralsheet.p4_game_total > max && $scope.geralsheet.showFourthPlayer)
      {
        max = $scope.geralsheet.p4_game_total;
      }

      if($scope.geralsheet['p' + player_no + '_game_total'] == max)
      {
        return 'color: red;';
      }

      //Always check the last auction total score
      min = $scope.geralsheet.p1_game_total;

      if($scope.geralsheet.p2_game_total < min)
      {
        min = $scope.geralsheet.p2_game_total;
      }

      if($scope.geralsheet.p3_game_total < min && $scope.geralsheet.showThirdPlayer)
      {
        min = $scope.geralsheet.p3_game_total;
      }

      if($scope.geralsheet.p4_game_total < min && $scope.geralsheet.showFourthPlayer)
      {
        min = $scope.geralsheet.p4_game_total;
      }

      if($scope.geralsheet['p' + player_no + '_game_total'] == min)
      {
        return 'color: blue;';
      }
    }
  }

  $scope.getMaxScore = function()
  {
    var max = 0;

    if($scope.geralsheet.p1_game_total >= max)
    {
      max = $scope.geralsheet.p1_game_total;
    }

    if($scope.geralsheet.p2_game_total >= max)
    {
      max = $scope.geralsheet.p2_game_total;
    }

    if($scope.geralsheet.p3_game_total >= max)
    {
      max = $scope.geralsheet.p3_game_total;
    }

    if($scope.geralsheet.p4_game_total >= max)
    {
      max = $scope.geralsheet.p4_game_total;
    }

    return max;
  }

  $scope.getMaxPlayers = function(max)
  {
    var max_players = [];

    if($scope.geralsheet.p1_game_total == max)
    {
      max_players.push('1');
    }

    if($scope.geralsheet.p3_game_total == max)
    {
      max_players.push('3');
    }

    if($scope.geralsheet.p4_game_total == max)
    {
      max_players.push('4');
    }

    if($scope.geralsheet.p2_game_total == max)
    {
      max_players.push('2');
    }

    return max_players;
  }

  $scope.getMinPlayers = function()
  {
    var min_players = [], 
        min = $scope.geralsheet.p1_game_total;

    if($scope.geralsheet.p2_game_total < min)
    {
      min = $scope.geralsheet.p2_game_total;
    }

    if($scope.geralsheet.p3_game_total < min)
    {
      min = $scope.geralsheet.p3_game_total;
    }

    if($scope.geralsheet.p4_game_total < min)
    {
      min = $scope.geralsheet.p4_game_total;
    }

    if($scope.geralsheet.p1_game_total == min)
    {
      min_players.push('1');
    }

    if($scope.geralsheet.p3_game_total == min)
    {
      min_players.push('3');
    }

    if($scope.geralsheet.p4_game_total == min)
    {
      min_players.push('4');
    }

    if($scope.geralsheet.p2_game_total == min)
    {
      min_players.push('2');
    }

    return min_players;
  }


  $scope.nextGame = function()
  {
    /*var has_victory = false,
        max = 0,
        winner = "";

    max = $scope.getMaxScore();

    if(max < $scope.geralsheet.targetScore)  //Target score não foi atingida - partida seguinte
    {
      $scope.addGeralGame();
      has_victory = true;
    }
    else
    {

      var playersWithMinScore = $scope.getMinPlayers();

      var numberOfPlayersWithMinScore = playersWithMinScore.length;

      if(numberOfPlayersWithMinScore > 1) //Empate com 2 ou mais jogadores
      {
        //Informar o utilizador que houve um empate, e continuar a jogar até só haver 1 vencedor
        $scope.openGeralModal(30);
        //has_victory = true;
      }
      else
      {
        var winner_model = "p" + playersWithMinScore[0] + "_game_victories",
            winner_name = "p" + playersWithMinScore[0] + "_name";

        $scope.geralsheet[winner_model]++;

        $scope.geralsheet.winner = $scope.geralsheet[winner_name] + "!";

        //alert("Vencedor(a): " + $scope.geralsheet[winner_name] + "!");

        //$scope.restartGeralScores();
        $scope.openGeralModal(29);
      }
    } 

    //if no scores matched the target score
    return has_victory;*/

    $scope.addGeralGame();
  }

  $scope.pushSingleWinner = function(winner)
  {
    //alert("Winner is " + winner);
    $scope.geralsheet.winners = [];
    //$scope.geralsheet[winner + '_game_victories']++;

    $scope.geralsheet.winners.push(winner);
  }

  $scope.pushMultipleWinners = function(winners)
  {
    $scope.geralsheet.winners = [];

    for(var i = 0; i < winners.length; i++)
    {
      $scope.geralsheet.winners.push(winners[i]);
    }
  }

  $scope.addVictoryToWinners = function()
  {
    for(var i = 0; i < $scope.geralsheet.winners.length; i++)
    {
      $scope.geralsheet[$scope.geralsheet.winners[i] + '_game_victories']++;
    }
  }

  $scope.getWinnerFromModal = function()
  {
    for(var i = 0; i < scope.geralsheet.playersMaxScore; i++)
    {

    }

  }

  $scope.initGeralScores = function()
  {
    //Totais
    $scope.geralsheet.p1_game_total = 0;
    $scope.geralsheet.p2_game_total = 0;
    $scope.geralsheet.p3_game_total = 0;
    $scope.geralsheet.p4_game_total = 0;
    $scope.geralsheet.p5_game_total = 0;

    //Victories
    $scope.geralsheet.p1_game_victories = 0;
    $scope.geralsheet.p2_game_victories = 0;
    $scope.geralsheet.p3_game_victories = 0;
    $scope.geralsheet.p4_game_victories = 0;
    $scope.geralsheet.p5_game_victories = 0;

    //Game counter
    $scope.geralsheet.current_game = 1;

    //Hide 3rd and 4th player by default
    $scope.geralsheet.showThirdPlayer = 0;
    $scope.geralsheet.showFourthPlayer = 0;
    $scope.geralsheet.showFifthPlayer = 0;

    //Winner
    $scope.geralsheet.winner_name_modal = "0";

    //Configurations
    $scope.geralsheet.playerNumbers = [
    { text: "2", value: "2P"},
    { text: "3", value: "3P"},
    { text: "4", value: "4P"},
    { text: "5", value: "5P"}
    ];

    $scope.geralsheet.gameList = [
    { number: 1, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, p5_model: 0, total_model: 0 }
    ];

    $scope.geralsheet.playerData = {
      players: '2P'
    };

    $scope.geralsheet.targetScore = 100;

    $scope.geralsheet.playersMaxScore = [];

    $scope.geralsheet.winners = [];

    $scope.geralsheet.p1_name = "Nós";
    $scope.geralsheet.p2_name = "Eles";

    $scope.geralsheet.winner = "";
    
  };

  $scope.restartScoresNotVictories = function()
  {
    //Totais
    $scope.geralsheet.p1_game_total = 0;
    $scope.geralsheet.p2_game_total = 0;
    $scope.geralsheet.p3_game_total = 0;
    $scope.geralsheet.p4_game_total = 0;
    $scope.geralsheet.p5_game_total = 0;

    //Game counter
    $scope.geralsheet.current_game = 1;

    //Hide 3rd and 4th player by default
    /*$scope.geralsheet.showThirdPlayer = 0;
    $scope.geralsheet.showFourthPlayer = 0;
    $scope.geralsheet.showFifthPlayer = 0;*/

    //Winner
    $scope.geralsheet.winner_name_modal = "0";

    //Configurations
    /*$scope.geralsheet.playerNumbers = [
    { text: "2", value: "2P"},
    { text: "3", value: "3P"},
    { text: "4", value: "4P"},
    { text: "5", value: "5P"}
    ];*/

    $scope.geralsheet.gameList = [
    { number: 1, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, p5_model: 0, total_model: 0 }
    ];

    /*$scope.geralsheet.playerData = {
      players: '2P'
    };

    $scope.geralsheet.targetScore = 100;*/

    $scope.geralsheet.playersMaxScore = [];

    //$scope.geralsheet.winners = [];

    //$scope.geralsheet.p1_name = "Nós";
    //$scope.geralsheet.p2_name = "Eles";

    $scope.geralsheet.winner = "";
    
  };

  $scope.calculateWinner = function()
  {
    //First, search the totals for a number equal to the max score.
    //If no total equals the match score, ask the user who won:
    openGeralModal(14);
  }

  $scope.setWinnerFromModal = function()
  {
    var winner = "";

    if($scope.geralsheet.winner_name_modal == "1")
    {
      winner = $scope.geralsheet.p1_name;

      $scope.geralsheet.p1_game_victories++;
    }else if($scope.geralsheet.winner_name_modal == "2")
    {
      winner = $scope.geralsheet.p2_name;

      $scope.geralsheet.p2_game_victories++;
    }else if($scope.geralsheet.winner_name_modal == "3")
    {
      winner = $scope.geralsheet.p3_name;

      $scope.geralsheet.p3_game_victories++;
    }else if($scope.geralsheet.winner_name_modal == "4")
    {
      winner = $scope.geralsheet.p4_name;

      $scope.geralsheet.p4_game_victories++;
    }

    alert("Vencedor(a): " + winner);

    $scope.restartGeralScores();
  }

  //Called when a new game starts
  $scope.restartGeralScores = function()
  {
    //Game counter
    $scope.geralsheet.current_game = 1;

    //Game rows
    $scope.geralsheet.gameList = [
    { number: 1, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, p5_model: 0, total_model: 0 }
    ];

    //Totais
    $scope.geralsheet.p1_game_total = 0;
    $scope.geralsheet.p2_game_total = 0;
    $scope.geralsheet.p3_game_total = 0;
    $scope.geralsheet.p4_game_total = 0;
    $scope.geralsheet.p5_game_total = 0;

    $scope.geralsheet.winners = [];
  };

  $scope.getGameTotalScore = function(game_no)
  {

  };

  $scope.playerNumberChange = function(item) 
  {
    //console.log("Number of players:", item.text, "value:", item.value);
    //console.log($scope.geralsheet.playerData.players);

    switch($scope.geralsheet.playerData.players)
    {
      case '3P':
      {
        $scope.geralsheet.showThirdPlayer = 1;
        $scope.geralsheet.showFourthPlayer = 0;
        $scope.geralsheet.showFifthPlayer = 0;
        $scope.geralsheet.p1_name = "Jog. 1";
        $scope.geralsheet.p2_name = "Jog. 3";
        $scope.geralsheet.p3_name = "Jog. 2";
        break;
      }
      case '4P':
      {
        $scope.geralsheet.showThirdPlayer = 1;
        $scope.geralsheet.showFourthPlayer = 1;
        $scope.geralsheet.showFifthPlayer = 0;
        $scope.geralsheet.p1_name = "Jog. 1";
        $scope.geralsheet.p2_name = "Jog. 4";
        $scope.geralsheet.p3_name = "Jog. 2";
        $scope.geralsheet.p4_name = "Jog. 3";
        break;
      }
      case '5P':
      {
        $scope.geralsheet.showThirdPlayer = 1;
        $scope.geralsheet.showFourthPlayer = 1;
        $scope.geralsheet.showFifthPlayer = 1;
        $scope.geralsheet.p1_name = "Jog. 1";
        $scope.geralsheet.p2_name = "Jog. 5";
        $scope.geralsheet.p3_name = "Jog. 2";
        $scope.geralsheet.p4_name = "Jog. 3";
        $scope.geralsheet.p5_name = "Jog. 4";
        break;
      }
      default:
      {
        $scope.geralsheet.showThirdPlayer = 0;
        $scope.geralsheet.showFourthPlayer = 0;
        $scope.geralsheet.showFifthPlayer = 0;
        $scope.geralsheet.p1_name = "Nós";
        $scope.geralsheet.p2_name = "Eles";
        break;
      }
    }
  };

  $scope.targetScoreChange = function(item) 
  {
    console.log("Target Score:", item.text, "value:", item.value);
    console.log($scope.targetScoreData.targetScore);
  };

  //Reset the scores
  $scope.initGeralScores();

  $scope.geralsheet.p1_name = "Nós";
  $scope.geralsheet.p2_name = "Eles";
  $scope.geralsheet.p3_name = "Jog. 3";
  $scope.geralsheet.p4_name = "Jog. 4";
  $scope.geralsheet.p5_name = "Jog. 5";

  $scope.$watch('geralsheet.p1_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('geralsheet.p2_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('geralsheet.p3_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  /*$scope.addPlayer = function()
  {
    if($scope.geralsheet.showThirdPlayer == 1)
    {
      if($scope.geralsheet.showFourthPlayer == 0)
      {
        $scope.geralsheet.showFourthPlayer = 1;
      }
      
    }
    else
    {
      $scope.geralsheet.showThirdPlayer = 1;
    }
  }*/


  $scope.calculateGameTotal = function(game_number)
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_game = 'p1_game_' + game_number,
        p2_game = 'p2_game_' + game_number,
        p3_game = 'p3_game_' + game_number,
        p1_game_score = $scope.geralsheet[p1_game],
        p2_game_score = $scope.geralsheet[p2_game],
        p3_game_score = $scope.geralsheet[p3_game],
        total = 0,
        total_game_model = 'total_game_' + game_number;

        if(p1_game_score != undefined)
        {
          if(!isNaN(p1_game_score))
          {
            total += p1_game_score;
          }
        }
        
        if(p2_game_score != undefined)
        {
          if(!isNaN(p2_game_score))
          {
            total += p2_game_score;
          }
        }

        if(p3_game_score != undefined)
        {
          if(!isNaN(p3_game_score))
          {
            total += p3_game_score;
          }
        }

        console.log(p1_game_score);
        console.log(p2_game_score);
        console.log(p3_game_score);
        console.log(total);

    $scope.geralsheet[total_game_model] = total;
  }

  $scope.changeGameTotalColor = function(game_number)
  {
    var game_no = game_number - 1;

    if($scope.geralsheet.gameList[game_no].total_model == 26 || $scope.geralsheet.gameList[game_no].total_model == 78)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.updateGameRowTotal = function(game_row, player_no) 
  {
      //Update row (right) total
      for(var i = 0; i < $scope.geralsheet.gameList.length; i++) 
      {
        if($scope.geralsheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.geralsheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p1_model;
          }

          if($scope.geralsheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p2_model;
          }

          if($scope.geralsheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p3_model;
          }

          if($scope.geralsheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p4_model;
          }

          if($scope.geralsheet.gameList[i].p5_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p5_model;
          }

          $scope.geralsheet.gameList[i].total_model = total_game_row;
        }
      }

      switch(player_no)
      {
        /*case 1: //Update the total for player 1
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.geralsheet.gameList.length; i++) 
          {
              if($scope.geralsheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.geralsheet.gameList[i].p1_model;
              }
          }

          $scope.geralsheet.p1_game_total = total_game_player_1;

          break;
        }*/
        case 2: //Update the total for player 2
        {
          var total_game_player_2 = 0;

          for(var i = 0; i < $scope.geralsheet.gameList.length; i++) 
          {
              if($scope.geralsheet.gameList[i].p2_model != undefined)
              {
                total_game_player_2 += $scope.geralsheet.gameList[i].p2_model;
              }
          }

          $scope.geralsheet.p2_game_total = total_game_player_2;

          break;
        }
        case 3: //Update the total for player 3
        {
          var total_game_player_3 = 0;

          for(var i = 0; i < $scope.geralsheet.gameList.length; i++) 
          {
              if($scope.geralsheet.gameList[i].p3_model != undefined)
              {
                total_game_player_3 += $scope.geralsheet.gameList[i].p3_model;
              }
          }

          $scope.geralsheet.p3_game_total = total_game_player_3;

          break;
        }
        case 4: //Update the total for player 4
        {
          var total_game_player_4 = 0;

          for(var i = 0; i < $scope.geralsheet.gameList.length; i++) 
          {
              if($scope.geralsheet.gameList[i].p4_model != undefined)
              {
                total_game_player_4 += $scope.geralsheet.gameList[i].p4_model;
              }
          }

          $scope.geralsheet.p4_game_total = total_game_player_4;

          break;
        }
        case 5: //Update the total for player 5
        {
          var total_game_player_5 = 0;

          for(var i = 0; i < $scope.geralsheet.gameList.length; i++) 
          {
              if($scope.geralsheet.gameList[i].p5_model != undefined)
              {
                total_game_player_5 += $scope.geralsheet.gameList[i].p5_model;
              }
          }

          $scope.geralsheet.p5_game_total = total_game_player_5;

          break;
        }
        default:
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.geralsheet.gameList.length; i++) 
          {
              if($scope.geralsheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.geralsheet.gameList[i].p1_model;
              }
          }

          $scope.geralsheet.p1_game_total = total_game_player_1;

          break;
        }
      }

      for(var i = 0; i < $scope.geralsheet.gameList.length; i++) 
      {
        if($scope.geralsheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.geralsheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p1_model;
          }

          if($scope.geralsheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p2_model;
          }

          if($scope.geralsheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p3_model;
          }

          if($scope.geralsheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p4_model;
          }

          if($scope.geralsheet.gameList[i].p5_model != undefined)
          {
            total_game_row += $scope.geralsheet.gameList[i].p5_model;
          }

          $scope.geralsheet.gameList[i].total_model = total_game_row;
        }
      }



      //alert(game_row);
  };
  
})

// ||||||||||||||||||||||||||||||||||||-- SUECA LOGIC --||||||||||||||||||||||||||||||||||||

.controller('suecaCtrl', function($scope, $stateParams) 
{

  //$scope = $scope;

  //$scope.showBannerAdView();

  $scope.showBannerAdView();

  $scope.checkIfLast = function(game_no)
  {
    if(game_no < $scope.suecasheet.current_game)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  $scope.evaluateSuecaPoints = function(points)
  {
    var game_no = $scope.suecasheet.modal_game_no,
        player_no = $scope.suecasheet.modal_player_no,
        total_points = 0;

    //Max score - targetscore
    if(points == -1)
    {
      points = $scope.suecasheet.targetScore;
    }

    var player_model_name = "p" + player_no + "_model",
        player_victories_model_name = "p" + player_no + "_victories";

    if(points == 0)
    {
      $scope.suecasheet.gameList[game_no][player_model_name] = 0;
      $scope.suecasheet.gameList[game_no][player_victories_model_name] = [];

      /*for(var i = 0; i < $scope.suecasheet.gameList.length; i++)
      {
        if(i > game_no)
        {
          $scope.suecasheet.gameList
        }
      }*/
      //$scope.suecasheet.gameList.splice($scope.suecasheet.gameList[game_no], 1);
    }
    else
    {
        total_points = points + $scope.suecasheet.gameList[game_no][player_model_name];

        //Calcular barras
        if(total_points >= $scope.suecasheet.targetScore)
        {
          total_points = $scope.suecasheet.targetScore;

          $scope.suecasheet.bufferTotalScore = total_points;
          $scope.suecasheet.bufferScore = points;

          $scope.openSuecaModal(game_no, player_no, 46);
        }
        else
        {
          $scope.suecasheet.gameList[game_no][player_model_name] = total_points;
          $scope.suecasheet.gameList[game_no][player_victories_model_name].push(points);
        }

        /*$scope.suecasheet.gameList[game_no][player_model_name] = total_points;
        $scope.suecasheet.gameList[game_no][player_victories_model_name].push(points);

        //alert($scope.suecasheet.gameList[game_no][player_victories_model_name]);

        if(total_points >= $scope.suecasheet.targetScore) //Vencedor, abre novo jogo
        {
            $scope.addSuecaGame();
        }*/
    }
  }

  $scope.addVictoryPointsToWinner = function()
  {
    var game_no = $scope.suecasheet.modal_game_no,
        player_no = $scope.suecasheet.modal_player_no;

    var player_model_name = "p" + player_no + "_model",
        player_victories_model_name = "p" + player_no + "_victories";

    $scope.suecasheet.gameList[game_no][player_model_name] = $scope.suecasheet.bufferTotalScore;
    $scope.suecasheet.gameList[game_no][player_victories_model_name].push($scope.suecasheet.bufferScore);

    //alert($scope.suecasheet.gameList[game_no][player_victories_model_name]);

    if($scope.suecasheet.bufferTotalScore >= $scope.suecasheet.targetScore) //Vencedor, abre novo jogo
    {
        $scope.addSuecaGame();
    }

    $scope.suecasheet.bufferTotalScore = 0;
    $scope.suecasheet.bufferScore = 0;
  }

  $scope.changeNameColorIfVictory = function(player_no, game)
  {
    var player_victories_model_name = "p" + player_no + "_victories";

    var total_victory_score = 0;

    for(var i = 0; i < $scope.suecasheet.gameList[game][player_victories_model_name].length; i++)
    {
      total_victory_score += $scope.suecasheet.gameList[game][player_victories_model_name][i];
    }

    if(total_victory_score >= $scope.suecasheet.targetScore)
    {
      return 'color: #4DFF4D !important;';
    }
  }


  $scope.getButtonClassFromVictories = function(points)
  {
    switch(points)
    {
      case 1:
      {
        return "energized-bg";
      }
      case 2:
      {
        return "positive-bg";
      }
      case 3:
      {
        return "balanced-bg";
      }
      default:
      {
        return "royal-bg";
      }
    }
  }

  $scope.addSuecaGame = function()
  {
    $scope.suecasheet.current_game++;

    $scope.suecasheet.gameList.push({ 
      number: $scope.suecasheet.current_game, 
      text: "Jogo " + String($scope.suecasheet.current_game),  
      p1_model: 0, 
      p2_model: 0, 
      total_model: 0, 
      p1_name: "Nós", 
      p2_name: "Eles",
      p1_victories: [],
      p2_victories: []
       });
  };

  $scope.setColorFromScore = function(player_no)
  {

    if($scope.suecasheet.p1_game_total == $scope.suecasheet.p2_game_total
      && $scope.suecasheet.p2_game_total == $scope.suecasheet.p3_game_total
      && $scope.suecasheet.p3_game_total == $scope.suecasheet.p4_game_total)
    {
      return 'color: black;';
    }
    else
    {
      var max, min;

      //Always check the last auction total score
      max = $scope.suecasheet.p1_game_total;

      if($scope.suecasheet.p2_game_total > max)
      {
        max = $scope.suecasheet.p2_game_total;
      }

      if($scope.suecasheet.p3_game_total > max && $scope.suecasheet.showThirdPlayer)
      {
        max = $scope.suecasheet.p3_game_total;
      }

      if($scope.suecasheet.p4_game_total > max && $scope.suecasheet.showFourthPlayer)
      {
        max = $scope.suecasheet.p4_game_total;
      }

      if($scope.suecasheet['p' + player_no + '_game_total'] == max)
      {
        return 'color: red;';
      }

      //Always check the last auction total score
      min = $scope.suecasheet.p1_game_total;

      if($scope.suecasheet.p2_game_total < min)
      {
        min = $scope.suecasheet.p2_game_total;
      }

      if($scope.suecasheet.p3_game_total < min && $scope.suecasheet.showThirdPlayer)
      {
        min = $scope.suecasheet.p3_game_total;
      }

      if($scope.suecasheet.p4_game_total < min && $scope.suecasheet.showFourthPlayer)
      {
        min = $scope.suecasheet.p4_game_total;
      }

      if($scope.suecasheet['p' + player_no + '_game_total'] == min)
      {
        return 'color: blue;';
      }
    }
  }

  $scope.getMaxScore = function()
  {
    var max = 0;

    if($scope.suecasheet.p1_game_total >= max)
    {
      max = $scope.suecasheet.p1_game_total;
    }

    if($scope.suecasheet.p2_game_total >= max)
    {
      max = $scope.suecasheet.p2_game_total;
    }

    if($scope.suecasheet.p3_game_total >= max)
    {
      max = $scope.suecasheet.p3_game_total;
    }

    if($scope.suecasheet.p4_game_total >= max)
    {
      max = $scope.suecasheet.p4_game_total;
    }

    return max;
  }

  $scope.getMaxPlayers = function(max)
  {
    var max_players = [];

    if($scope.suecasheet.p1_game_total == max)
    {
      max_players.push('1');
    }

    if($scope.suecasheet.p3_game_total == max)
    {
      max_players.push('3');
    }

    if($scope.suecasheet.p4_game_total == max)
    {
      max_players.push('4');
    }

    if($scope.suecasheet.p2_game_total == max)
    {
      max_players.push('2');
    }

    return max_players;
  }

  $scope.getMinPlayers = function()
  {
    var min_players = [], 
        min = $scope.suecasheet.p1_game_total;

    if($scope.suecasheet.p2_game_total < min)
    {
      min = $scope.suecasheet.p2_game_total;
    }

    if($scope.suecasheet.p3_game_total < min)
    {
      min = $scope.suecasheet.p3_game_total;
    }

    if($scope.suecasheet.p4_game_total < min)
    {
      min = $scope.suecasheet.p4_game_total;
    }

    if($scope.suecasheet.p1_game_total == min)
    {
      min_players.push('1');
    }

    if($scope.suecasheet.p3_game_total == min)
    {
      min_players.push('3');
    }

    if($scope.suecasheet.p4_game_total == min)
    {
      min_players.push('4');
    }

    if($scope.suecasheet.p2_game_total == min)
    {
      min_players.push('2');
    }

    return min_players;
  }


  $scope.checkTotalForVictory = function()
  {
    var has_victory = false,
        max = 0,
        winner = "";

    max = $scope.getMaxScore();

    if(max < $scope.suecasheet.targetScore)  //Target score não foi atingida - partida seguinte
    {
      $scope.addSuecaGame();
      has_victory = true;
    }
    else
    {

      var playersWithMinScore = $scope.getMinPlayers();

      var numberOfPlayersWithMinScore = playersWithMinScore.length;

      if(numberOfPlayersWithMinScore > 1) //Empate com 2 ou mais jogadores
      {
        //Informar o utilizador que houve um empate, e continuar a jogar até só haver 1 vencedor
        $scope.openSuecaModal(30);
        //has_victory = true;
      }
      else
      {
        var winner_model = "p" + playersWithMinScore[0] + "_game_victories",
            winner_name = "p" + playersWithMinScore[0] + "_name";

        $scope.suecasheet[winner_model]++;

        $scope.suecasheet.winner = $scope.suecasheet[winner_name] + "!";

        //alert("Vencedor(a): " + $scope.suecasheet[winner_name] + "!");

        //$scope.restartSuecaScores();
        $scope.openSuecaModal(29);
      }

      //alert('Players with min score: ' + numberOfPlayersWithMinScore);

      /*if($scope.getMaxPlayers(max).length == 1)  //Um só vencedor - incrementar vitória e recomeçar
      {
        var winner_model = "p" + $scope.getMaxPlayers(max)[4] + "_game_victories",
            winner_name = "p" + $scope.getMaxPlayers(max)[] + "_name";

        $scope.suecasheet[winner_model]++;

        $scope.suecasheet.winner = $scope.suecasheet[winner_name] + "!";

        //alert("Vencedor(a): " + $scope.suecasheet[winner_name] + "!");

        //$scope.restartSuecaScores();
        $scope.openSuecaModal(16);
      }
      else 
      {
        if(!$scope.suecasheet.showThirdPlayer) //Empate com 2 jogadores
        {
          //alert("Empate! Vence quem tiver mais pontos na próxima partida.");

          //$scope.addSuecaGame();      //partida seguinte (até ganhar)
          $scope.openSuecaModal(17);
          has_victory = true;
        }
        else // empate com + de 2 jogadores, Modal com o vector de $scope.getMaxPlayers(max)
        {
          $scope.suecasheet.playersMaxScore = $scope.getMaxPlayers(max);

          $scope.openSuecaModal(14);
        }
      }*/
    } 

    //if no scores matched the target score
    return has_victory;
  }

  $scope.pushSingleWinner = function(winner)
  {
    //alert("Winner is " + winner);
    $scope.suecasheet.winners = [];
    //$scope.suecasheet[winner + '_game_victories']++;

    $scope.suecasheet.winners.push(winner);
  }

  $scope.pushMultipleWinners = function(winners)
  {
    $scope.suecasheet.winners = [];

    for(var i = 0; i < winners.length; i++)
    {
      $scope.suecasheet.winners.push(winners[i]);
    }
  }

  $scope.addVictoryToWinners = function()
  {
    for(var i = 0; i < $scope.suecasheet.winners.length; i++)
    {
      $scope.suecasheet[$scope.suecasheet.winners[i] + '_game_victories']++;
    }
  }

  $scope.getWinnerFromModal = function()
  {
    for(var i = 0; i < scope.suecasheet.playersMaxScore; i++)
    {

    }

  }

  $scope.initSuecaScores = function()
  {
    //Totais
    $scope.suecasheet.p1_game_total = 0;
    $scope.suecasheet.p2_game_total = 0;
    $scope.suecasheet.p3_game_total = 0;
    $scope.suecasheet.p4_game_total = 0;

    //Victories
    $scope.suecasheet.p1_game_victories = 0;
    $scope.suecasheet.p2_game_victories = 0;
    $scope.suecasheet.p3_game_victories = 0;
    $scope.suecasheet.p4_game_victories = 0;

    //Game counter
    $scope.suecasheet.current_game = 0;

    //Hide 3rd and 4th player by default
    $scope.suecasheet.showThirdPlayer = 0;
    $scope.suecasheet.showFourthPlayer = 0;

    //Winner
    $scope.suecasheet.winner_name_modal = "0";

    //Buffer
    $scope.suecasheet.bufferTotalScore = 0; 
    $scope.suecasheet.bufferScore = 0;    

    //Configurations
    $scope.suecasheet.playerNumbers = [
    { text: "2", value: "2P"},
    //{ text: "3", value: "3P"},
    { text: "4", value: "4P"}
    ];

    $scope.suecasheet.gameList = [
    { 
      number: 0, 
      text: "Jogo 1", 
      p1_model: 0, 
      p2_model: 0, 
      total_model: 0, 
      p1_name: "Nós", 
      p2_name: "Eles",
      p1_victories: [],
      p2_victories: []
    }];

    $scope.suecasheet.playerData = {
      players: '2P'
    };

    $scope.suecasheet.targetScore = 4;

    $scope.suecasheet.playersMaxScore = [];

    $scope.suecasheet.winners = [];

    $scope.suecasheet.p1_name = "Nós";
    $scope.suecasheet.p2_name = "Eles";

    $scope.suecasheet.winner = "";
    
  };

  $scope.calculateWinner = function()
  {
    //First, search the totals for a number equal to the max score.
    //If no total equals the match score, ask the user who won:
    openSuecaModal(14);
  }

  $scope.setWinnerFromModal = function()
  {
    var winner = "";

    if($scope.suecasheet.winner_name_modal == "1")
    {
      winner = $scope.suecasheet.p1_name;

      $scope.suecasheet.p1_game_victories++;
    }else if($scope.suecasheet.winner_name_modal == "2")
    {
      winner = $scope.suecasheet.p2_name;

      $scope.suecasheet.p2_game_victories++;
    }else if($scope.suecasheet.winner_name_modal == "3")
    {
      winner = $scope.suecasheet.p3_name;

      $scope.suecasheet.p3_game_victories++;
    }else if($scope.suecasheet.winner_name_modal == "4")
    {
      winner = $scope.suecasheet.p4_name;

      $scope.suecasheet.p4_game_victories++;
    }

    alert("Vencedor(a): " + winner);

    $scope.restartSuecaScores();
  }

  //Called when a new game starts
  $scope.restartSuecaScores = function()
  {
    //Game counter
    $scope.suecasheet.current_game = 0;

    //Game rows
    /*$scope.suecasheet.gameList = [
    { number: 0, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, total_model: 0 }
    ];*/

    $scope.suecasheet.gameList = [
    { 
      number: 0, 
      text: "Jogo 1", 
      p1_model: 0, 
      p2_model: 0, 
      total_model: 0, 
      p1_name: "Nós", 
      p2_name: "Eles",
      p1_victories: [],
      p2_victories: []
    }];

    //Totais
    $scope.suecasheet.p1_game_total = 0;
    $scope.suecasheet.p2_game_total = 0;
    $scope.suecasheet.p3_game_total = 0;
    $scope.suecasheet.p4_game_total = 0;

    $scope.suecasheet.winners = [];
  };

  $scope.getGameTotalScore = function(game_no)
  {

  };

  $scope.playerNumberChange = function(item) 
  {
    //console.log("Number of players:", item.text, "value:", item.value);
    //console.log($scope.suecasheet.playerData.players);

    switch($scope.suecasheet.playerData.players)
    {
      case '3P':
      {
        $scope.suecasheet.showThirdPlayer = 1;
        $scope.suecasheet.showFourthPlayer = 0;
        $scope.suecasheet.p1_name = "Jog. 1";
        $scope.suecasheet.p2_name = "Jog. 3";
        $scope.suecasheet.p3_name = "Jog. 2";
        break;
      }
      case '4P':
      {
        $scope.suecasheet.showThirdPlayer = 1;
        $scope.suecasheet.showFourthPlayer = 1;
        $scope.suecasheet.p1_name = "Jog. 1";
        $scope.suecasheet.p2_name = "Jog. 4";
        $scope.suecasheet.p3_name = "Jog. 2";
        $scope.suecasheet.p4_name = "Jog. 3";
        break;
      }
      default:
      {
        $scope.suecasheet.showThirdPlayer = 0;
        $scope.suecasheet.showFourthPlayer = 0;
        $scope.suecasheet.p1_name = "Nós";
        $scope.suecasheet.p2_name = "Eles";
        break;
      }
    }
  };

  $scope.targetScoreChange = function(item) 
  {
    console.log("Target Score:", item.text, "value:", item.value);
    console.log($scope.targetScoreData.targetScore);
  };

  //Reset the scores
  $scope.initSuecaScores();

  $scope.suecasheet.p1_name = "Nós";
  $scope.suecasheet.p2_name = "Eles";
  $scope.suecasheet.p3_name = "Jog. 3";
  $scope.suecasheet.p4_name = "Jog. 4";

  $scope.$watch('suecasheet.p1_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('suecasheet.p2_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('suecasheet.p3_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  /*$scope.addPlayer = function()
  {
    if($scope.suecasheet.showThirdPlayer == 1)
    {
      $scope.suecasheet.showFourthPlayer = 1;
    }
    else
    {
      $scope.suecasheet.showThirdPlayer = 1;
    }
  }*/


  $scope.calculateGameTotal = function(game_number)
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_game = 'p1_game_' + game_number,
        p2_game = 'p2_game_' + game_number,
        p3_game = 'p3_game_' + game_number,
        p1_game_score = $scope.suecasheet[p1_game],
        p2_game_score = $scope.suecasheet[p2_game],
        p3_game_score = $scope.suecasheet[p3_game],
        total = 0,
        total_game_model = 'total_game_' + game_number;

        if(p1_game_score != undefined)
        {
          if(!isNaN(p1_game_score))
          {
            total += p1_game_score;
          }
        }
        
        if(p2_game_score != undefined)
        {
          if(!isNaN(p2_game_score))
          {
            total += p2_game_score;
          }
        }

        if(p3_game_score != undefined)
        {
          if(!isNaN(p3_game_score))
          {
            total += p3_game_score;
          }
        }

        console.log(p1_game_score);
        console.log(p2_game_score);
        console.log(p3_game_score);
        console.log(total);

    $scope.suecasheet[total_game_model] = total;
  }

  $scope.changeGameTotalColor = function(game_number)
  {
    //var game_no = game_number - 1;

    if($scope.suecasheet.gameList[game_no].total_model == 26 || $scope.suecasheet.gameList[game_no].total_model == 78)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.updateGameRowTotal = function(game_row, player_no) 
  {
      //Update row (right) total
      for(var i = 0; i < $scope.suecasheet.gameList.length; i++) 
      {
        if($scope.suecasheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.suecasheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.suecasheet.gameList[i].p1_model;
          }

          if($scope.suecasheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.suecasheet.gameList[i].p2_model;
          }

          if($scope.suecasheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.suecasheet.gameList[i].p3_model;
          }

          if($scope.suecasheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.suecasheet.gameList[i].p4_model;
          }

          $scope.suecasheet.gameList[i].total_model = total_game_row;
        }
      }

      switch(player_no)
      {
        /*case 1: //Update the total for player 1
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.suecasheet.gameList.length; i++) 
          {
              if($scope.suecasheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.suecasheet.gameList[i].p1_model;
              }
          }

          $scope.suecasheet.p1_game_total = total_game_player_1;

          break;
        }*/
        case 2: //Update the total for player 2
        {
          var total_game_player_2 = 0;

          for(var i = 0; i < $scope.suecasheet.gameList.length; i++) 
          {
              if($scope.suecasheet.gameList[i].p2_model != undefined)
              {
                total_game_player_2 += $scope.suecasheet.gameList[i].p2_model;
              }
          }

          $scope.suecasheet.p2_game_total = total_game_player_2;

          break;
        }
        case 3: //Update the total for player 3
        {
          var total_game_player_3 = 0;

          for(var i = 0; i < $scope.suecasheet.gameList.length; i++) 
          {
              if($scope.suecasheet.gameList[i].p3_model != undefined)
              {
                total_game_player_3 += $scope.suecasheet.gameList[i].p3_model;
              }
          }

          $scope.suecasheet.p3_game_total = total_game_player_3;

          break;
        }
        case 4: //Update the total for player 4
        {
          var total_game_player_4 = 0;

          for(var i = 0; i < $scope.suecasheet.gameList.length; i++) 
          {
              if($scope.suecasheet.gameList[i].p4_model != undefined)
              {
                total_game_player_4 += $scope.suecasheet.gameList[i].p4_model;
              }
          }

          $scope.suecasheet.p4_game_total = total_game_player_4;

          break;
        }
        default:
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.suecasheet.gameList.length; i++) 
          {
              if($scope.suecasheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.suecasheet.gameList[i].p1_model;
              }
          }

          $scope.suecasheet.p1_game_total = total_game_player_1;

          break;
        }
      }

      for(var i = 0; i < $scope.suecasheet.gameList.length; i++) 
      {
        if($scope.suecasheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.suecasheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.suecasheet.gameList[i].p1_model;
          }

          if($scope.suecasheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.suecasheet.gameList[i].p2_model;
          }

          if($scope.suecasheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.suecasheet.gameList[i].p3_model;
          }

          if($scope.suecasheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.suecasheet.gameList[i].p4_model;
          }

          $scope.suecasheet.gameList[i].total_model = total_game_row;
        }
      }



      //alert(game_row);
  };
  
})

// ||||||||||||||||||||||||||||||||||||-- BISCA LOGIC --||||||||||||||||||||||||||||||||||||

.controller('biscaCtrl', function($scope, $stateParams, $ionicHistory) 
{

  //$scope = $scope;

  //$scope.showBannerAdView();

  $scope.showBannerAdView();

  $scope.checkIfLast = function(game_no)
  {
    if(game_no < $scope.biscasheet.current_game)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  $scope.evaluateBiscaPoints = function(points)
  {
    var game_no = $scope.biscasheet.modal_game_no,
        player_no = $scope.biscasheet.modal_player_no,
        total_points = 0;

    //Max score - targetscore
    if(points == -1)
    {
      points = $scope.biscasheet.targetScore;
    }

    var player_model_name = "p" + player_no + "_model",
        player_victories_model_name = "p" + player_no + "_victories";

    if(points == 0)
    {
      $scope.biscasheet.gameList[game_no][player_model_name] = 0;
      $scope.biscasheet.gameList[game_no][player_victories_model_name] = [];

      /*for(var i = 0; i < $scope.biscasheet.gameList.length; i++)
      {
        if(i > game_no)
        {
          $scope.biscasheet.gameList
        }
      }*/
      //$scope.biscasheet.gameList.splice($scope.biscasheet.gameList[game_no], 1);
    }
    else
    {
        total_points = points + $scope.biscasheet.gameList[game_no][player_model_name];

        //Calcular barras
        if(total_points >= $scope.biscasheet.targetScore)
        {
          total_points = $scope.biscasheet.targetScore;

          $scope.biscasheet.bufferTotalScore = total_points;
          $scope.biscasheet.bufferScore = points;

          $scope.openBiscaModal(game_no, player_no, 55);
        }
        else
        {
          $scope.biscasheet.gameList[game_no][player_model_name] = total_points;
          $scope.biscasheet.gameList[game_no][player_victories_model_name].push(points);
        }

        /*$scope.biscasheet.gameList[game_no][player_model_name] = total_points;
        $scope.biscasheet.gameList[game_no][player_victories_model_name].push(points);

        //alert($scope.biscasheet.gameList[game_no][player_victories_model_name]);

        if(total_points >= $scope.biscasheet.targetScore) //Vencedor, abre novo jogo
        {
            $scope.addBiscaGame();
        }*/
    }
  }

  $scope.addVictoryPointsToWinner = function()
  {
    var game_no = $scope.biscasheet.modal_game_no,
        player_no = $scope.biscasheet.modal_player_no;

    var player_model_name = "p" + player_no + "_model",
        player_victories_model_name = "p" + player_no + "_victories";

    $scope.biscasheet.gameList[game_no][player_model_name] = $scope.biscasheet.bufferTotalScore;
    $scope.biscasheet.gameList[game_no][player_victories_model_name].push($scope.biscasheet.bufferScore);

    //alert($scope.biscasheet.gameList[game_no][player_victories_model_name]);

    if($scope.biscasheet.bufferTotalScore >= $scope.biscasheet.targetScore) //Vencedor, abre novo jogo
    {
        $scope.addBiscaGame();
    }

    $scope.biscasheet.bufferTotalScore = 0;
    $scope.biscasheet.bufferScore = 0;
  }

  $scope.changeNameColorIfVictory = function(player_no, game)
  {
    var player_victories_model_name = "p" + player_no + "_victories";

    var total_victory_score = 0;

    for(var i = 0; i < $scope.biscasheet.gameList[game][player_victories_model_name].length; i++)
    {
      total_victory_score += $scope.biscasheet.gameList[game][player_victories_model_name][i];
    }

    if(total_victory_score >= $scope.biscasheet.targetScore)
    {
      return 'color: #94FF94 !important;';
    }
  }


  $scope.getButtonClassFromVictories = function(points)
  {
    switch(points)
    {
      case 1:
      {
        return "energized-bg";
      }
      case 2:
      {
        return "positive-bg";
      }
      case 3:
      {
        return "balanced-bg";
      }
      default:
      {
        return "royal-bg";
      }
    }
  }

  $scope.addBiscaGame = function()
  {
    $scope.biscasheet.current_game++;

    $scope.biscasheet.gameList.push({ 
      number: $scope.biscasheet.current_game, 
      text: "Jogo " + String($scope.biscasheet.current_game),  
      p1_model: 0, 
      p2_model: 0, 
      total_model: 0, 
      p1_name: "Nós", 
      p2_name: "Eles",
      p1_victories: [],
      p2_victories: []
       });
  };

  $scope.setColorFromScore = function(player_no)
  {

    if($scope.biscasheet.p1_game_total == $scope.biscasheet.p2_game_total
      && $scope.biscasheet.p2_game_total == $scope.biscasheet.p3_game_total
      && $scope.biscasheet.p3_game_total == $scope.biscasheet.p4_game_total)
    {
      return 'color: black;';
    }
    else
    {
      var max, min;

      //Always check the last auction total score
      max = $scope.biscasheet.p1_game_total;

      if($scope.biscasheet.p2_game_total > max)
      {
        max = $scope.biscasheet.p2_game_total;
      }

      if($scope.biscasheet.p3_game_total > max && $scope.biscasheet.showThirdPlayer)
      {
        max = $scope.biscasheet.p3_game_total;
      }

      if($scope.biscasheet.p4_game_total > max && $scope.biscasheet.showFourthPlayer)
      {
        max = $scope.biscasheet.p4_game_total;
      }

      if($scope.biscasheet['p' + player_no + '_game_total'] == max)
      {
        return 'color: red;';
      }

      //Always check the last auction total score
      min = $scope.biscasheet.p1_game_total;

      if($scope.biscasheet.p2_game_total < min)
      {
        min = $scope.biscasheet.p2_game_total;
      }

      if($scope.biscasheet.p3_game_total < min && $scope.biscasheet.showThirdPlayer)
      {
        min = $scope.biscasheet.p3_game_total;
      }

      if($scope.biscasheet.p4_game_total < min && $scope.biscasheet.showFourthPlayer)
      {
        min = $scope.biscasheet.p4_game_total;
      }

      if($scope.biscasheet['p' + player_no + '_game_total'] == min)
      {
        return 'color: blue;';
      }
    }
  }

  $scope.getMaxScore = function()
  {
    var max = 0;

    if($scope.biscasheet.p1_game_total >= max)
    {
      max = $scope.biscasheet.p1_game_total;
    }

    if($scope.biscasheet.p2_game_total >= max)
    {
      max = $scope.biscasheet.p2_game_total;
    }

    if($scope.biscasheet.p3_game_total >= max)
    {
      max = $scope.biscasheet.p3_game_total;
    }

    if($scope.biscasheet.p4_game_total >= max)
    {
      max = $scope.biscasheet.p4_game_total;
    }

    return max;
  }

  $scope.getMaxPlayers = function(max)
  {
    var max_players = [];

    if($scope.biscasheet.p1_game_total == max)
    {
      max_players.push('1');
    }

    if($scope.biscasheet.p3_game_total == max)
    {
      max_players.push('3');
    }

    if($scope.biscasheet.p4_game_total == max)
    {
      max_players.push('4');
    }

    if($scope.biscasheet.p2_game_total == max)
    {
      max_players.push('2');
    }

    return max_players;
  }

  $scope.getMinPlayers = function()
  {
    var min_players = [], 
        min = $scope.biscasheet.p1_game_total;

    if($scope.biscasheet.p2_game_total < min)
    {
      min = $scope.biscasheet.p2_game_total;
    }

    if($scope.biscasheet.p3_game_total < min)
    {
      min = $scope.biscasheet.p3_game_total;
    }

    if($scope.biscasheet.p4_game_total < min)
    {
      min = $scope.biscasheet.p4_game_total;
    }

    if($scope.biscasheet.p1_game_total == min)
    {
      min_players.push('1');
    }

    if($scope.biscasheet.p3_game_total == min)
    {
      min_players.push('3');
    }

    if($scope.biscasheet.p4_game_total == min)
    {
      min_players.push('4');
    }

    if($scope.biscasheet.p2_game_total == min)
    {
      min_players.push('2');
    }

    return min_players;
  }


  $scope.checkTotalForVictory = function()
  {
    var has_victory = false,
        max = 0,
        winner = "";

    max = $scope.getMaxScore();

    if(max < $scope.biscasheet.targetScore)  //Target score não foi atingida - partida seguinte
    {
      $scope.addBiscaGame();
      has_victory = true;
    }
    else
    {

      var playersWithMinScore = $scope.getMinPlayers();

      var numberOfPlayersWithMinScore = playersWithMinScore.length;

      if(numberOfPlayersWithMinScore > 1) //Empate com 2 ou mais jogadores
      {
        //Informar o utilizador que houve um empate, e continuar a jogar até só haver 1 vencedor
        $scope.openBiscaModal(30);
        //has_victory = true;
      }
      else
      {
        var winner_model = "p" + playersWithMinScore[0] + "_game_victories",
            winner_name = "p" + playersWithMinScore[0] + "_name";

        $scope.biscasheet[winner_model]++;

        $scope.biscasheet.winner = $scope.biscasheet[winner_name] + "!";

        //alert("Vencedor(a): " + $scope.biscasheet[winner_name] + "!");

        //$scope.restartBiscaScores();
        $scope.openBiscaModal(29);
      }

      //alert('Players with min score: ' + numberOfPlayersWithMinScore);

      /*if($scope.getMaxPlayers(max).length == 1)  //Um só vencedor - incrementar vitória e recomeçar
      {
        var winner_model = "p" + $scope.getMaxPlayers(max)[4] + "_game_victories",
            winner_name = "p" + $scope.getMaxPlayers(max)[] + "_name";

        $scope.biscasheet[winner_model]++;

        $scope.biscasheet.winner = $scope.biscasheet[winner_name] + "!";

        //alert("Vencedor(a): " + $scope.biscasheet[winner_name] + "!");

        //$scope.restartBiscaScores();
        $scope.openBiscaModal(16);
      }
      else 
      {
        if(!$scope.biscasheet.showThirdPlayer) //Empate com 2 jogadores
        {
          //alert("Empate! Vence quem tiver mais pontos na próxima partida.");

          //$scope.addBiscaGame();      //partida seguinte (até ganhar)
          $scope.openBiscaModal(17);
          has_victory = true;
        }
        else // empate com + de 2 jogadores, Modal com o vector de $scope.getMaxPlayers(max)
        {
          $scope.biscasheet.playersMaxScore = $scope.getMaxPlayers(max);

          $scope.openBiscaModal(14);
        }
      }*/
    } 

    //if no scores matched the target score
    return has_victory;
  }

  $scope.pushSingleWinner = function(winner)
  {
    //alert("Winner is " + winner);
    $scope.biscasheet.winners = [];
    //$scope.biscasheet[winner + '_game_victories']++;

    $scope.biscasheet.winners.push(winner);
  }

  $scope.pushMultipleWinners = function(winners)
  {
    $scope.biscasheet.winners = [];

    for(var i = 0; i < winners.length; i++)
    {
      $scope.biscasheet.winners.push(winners[i]);
    }
  }

  $scope.addVictoryToWinners = function()
  {
    for(var i = 0; i < $scope.biscasheet.winners.length; i++)
    {
      $scope.biscasheet[$scope.biscasheet.winners[i] + '_game_victories']++;
    }
  }

  $scope.getWinnerFromModal = function()
  {
    for(var i = 0; i < scope.biscasheet.playersMaxScore; i++)
    {

    }

  }

  $scope.initBiscaScores = function()
  {
    //Totais
    $scope.biscasheet.p1_game_total = 0;
    $scope.biscasheet.p2_game_total = 0;
    $scope.biscasheet.p3_game_total = 0;
    $scope.biscasheet.p4_game_total = 0;

    //Victories
    $scope.biscasheet.p1_game_victories = 0;
    $scope.biscasheet.p2_game_victories = 0;
    $scope.biscasheet.p3_game_victories = 0;
    $scope.biscasheet.p4_game_victories = 0;

    //Game counter
    $scope.biscasheet.current_game = 0;

    //Hide 3rd and 4th player by default
    $scope.biscasheet.showThirdPlayer = 0;
    $scope.biscasheet.showFourthPlayer = 0;

    //Winner
    $scope.biscasheet.winner_name_modal = "0";

    //Configurations
    $scope.biscasheet.playerNumbers = [
    { text: "2", value: "2P"},
    //{ text: "3", value: "3P"},
    { text: "4", value: "4P"}
    ];

    $scope.biscasheet.gameList = [
    { 
      number: 0, 
      text: "Jogo 1", 
      p1_model: 0, 
      p2_model: 0, 
      total_model: 0, 
      p1_name: "Nós", 
      p2_name: "Eles",
      p1_victories: [],
      p2_victories: []
    }];

    $scope.biscasheet.playerData = {
      players: '2P'
    };

    $scope.biscasheet.targetScore = 4;

    $scope.biscasheet.playersMaxScore = [];

    $scope.biscasheet.winners = [];

    $scope.biscasheet.p1_name = "Nós";
    $scope.biscasheet.p2_name = "Eles";

    $scope.biscasheet.winner = "";
    
  };

  $scope.calculateWinner = function()
  {
    //First, search the totals for a number equal to the max score.
    //If no total equals the match score, ask the user who won:
    openBiscaModal(14);
  }

  $scope.setWinnerFromModal = function()
  {
    var winner = "";

    if($scope.biscasheet.winner_name_modal == "1")
    {
      winner = $scope.biscasheet.p1_name;

      $scope.biscasheet.p1_game_victories++;
    }else if($scope.biscasheet.winner_name_modal == "2")
    {
      winner = $scope.biscasheet.p2_name;

      $scope.biscasheet.p2_game_victories++;
    }else if($scope.biscasheet.winner_name_modal == "3")
    {
      winner = $scope.biscasheet.p3_name;

      $scope.biscasheet.p3_game_victories++;
    }else if($scope.biscasheet.winner_name_modal == "4")
    {
      winner = $scope.biscasheet.p4_name;

      $scope.biscasheet.p4_game_victories++;
    }

    alert("Vencedor(a): " + winner);

    $scope.restartBiscaScores();
  }

  //Called when a new game starts
  $scope.restartBiscaScores = function()
  {
    //Game counter
    $scope.biscasheet.current_game = 0;

    //Game rows
    /*$scope.biscasheet.gameList = [
    { number: 0, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, total_model: 0 }
    ];*/

    $scope.biscasheet.gameList = [
    { 
      number: 0, 
      text: "Jogo 1", 
      p1_model: 0, 
      p2_model: 0, 
      total_model: 0, 
      p1_name: "Nós", 
      p2_name: "Eles",
      p1_victories: [],
      p2_victories: []
    }];

    //Totais
    $scope.biscasheet.p1_game_total = 0;
    $scope.biscasheet.p2_game_total = 0;
    $scope.biscasheet.p3_game_total = 0;
    $scope.biscasheet.p4_game_total = 0;

    $scope.biscasheet.winners = [];
  };

  $scope.getGameTotalScore = function(game_no)
  {

  };

  $scope.playerNumberChange = function(item) 
  {
    //console.log("Number of players:", item.text, "value:", item.value);
    //console.log($scope.biscasheet.playerData.players);

    switch($scope.biscasheet.playerData.players)
    {
      case '3P':
      {
        $scope.biscasheet.showThirdPlayer = 1;
        $scope.biscasheet.showFourthPlayer = 0;
        $scope.biscasheet.p1_name = "Jog. 1";
        $scope.biscasheet.p2_name = "Jog. 3";
        $scope.biscasheet.p3_name = "Jog. 2";
        break;
      }
      case '4P':
      {
        $scope.biscasheet.showThirdPlayer = 1;
        $scope.biscasheet.showFourthPlayer = 1;
        $scope.biscasheet.p1_name = "Jog. 1";
        $scope.biscasheet.p2_name = "Jog. 4";
        $scope.biscasheet.p3_name = "Jog. 2";
        $scope.biscasheet.p4_name = "Jog. 3";
        break;
      }
      default:
      {
        $scope.biscasheet.showThirdPlayer = 0;
        $scope.biscasheet.showFourthPlayer = 0;
        $scope.biscasheet.p1_name = "Nós";
        $scope.biscasheet.p2_name = "Eles";
        break;
      }
    }
  };

  $scope.targetScoreChange = function(item) 
  {
    console.log("Target Score:", item.text, "value:", item.value);
    console.log($scope.targetScoreData.targetScore);
  };

  //Reset the scores
  $scope.initBiscaScores();

  $scope.biscasheet.p1_name = "Nós";
  $scope.biscasheet.p2_name = "Eles";
  $scope.biscasheet.p3_name = "Jog. 3";
  $scope.biscasheet.p4_name = "Jog. 4";

  $scope.$watch('biscasheet.p1_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('biscasheet.p2_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('biscasheet.p3_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  /*$scope.addPlayer = function()
  {
    if($scope.biscasheet.showThirdPlayer == 1)
    {
      $scope.biscasheet.showFourthPlayer = 1;
    }
    else
    {
      $scope.biscasheet.showThirdPlayer = 1;
    }
  }*/


  $scope.calculateGameTotal = function(game_number)
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_game = 'p1_game_' + game_number,
        p2_game = 'p2_game_' + game_number,
        p3_game = 'p3_game_' + game_number,
        p1_game_score = $scope.biscasheet[p1_game],
        p2_game_score = $scope.biscasheet[p2_game],
        p3_game_score = $scope.biscasheet[p3_game],
        total = 0,
        total_game_model = 'total_game_' + game_number;

        if(p1_game_score != undefined)
        {
          if(!isNaN(p1_game_score))
          {
            total += p1_game_score;
          }
        }
        
        if(p2_game_score != undefined)
        {
          if(!isNaN(p2_game_score))
          {
            total += p2_game_score;
          }
        }

        if(p3_game_score != undefined)
        {
          if(!isNaN(p3_game_score))
          {
            total += p3_game_score;
          }
        }

        console.log(p1_game_score);
        console.log(p2_game_score);
        console.log(p3_game_score);
        console.log(total);

    $scope.biscasheet[total_game_model] = total;
  }

  $scope.changeGameTotalColor = function(game_number)
  {
    //var game_no = game_number - 1;

    if($scope.biscasheet.gameList[game_no].total_model == 26 || $scope.biscasheet.gameList[game_no].total_model == 78)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }
  }

  $scope.updateGameRowTotal = function(game_row, player_no) 
  {
      //Update row (right) total
      for(var i = 0; i < $scope.biscasheet.gameList.length; i++) 
      {
        if($scope.biscasheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.biscasheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.biscasheet.gameList[i].p1_model;
          }

          if($scope.biscasheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.biscasheet.gameList[i].p2_model;
          }

          if($scope.biscasheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.biscasheet.gameList[i].p3_model;
          }

          if($scope.biscasheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.biscasheet.gameList[i].p4_model;
          }

          $scope.biscasheet.gameList[i].total_model = total_game_row;
        }
      }

      switch(player_no)
      {
        /*case 1: //Update the total for player 1
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.biscasheet.gameList.length; i++) 
          {
              if($scope.biscasheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.biscasheet.gameList[i].p1_model;
              }
          }

          $scope.biscasheet.p1_game_total = total_game_player_1;

          break;
        }*/
        case 2: //Update the total for player 2
        {
          var total_game_player_2 = 0;

          for(var i = 0; i < $scope.biscasheet.gameList.length; i++) 
          {
              if($scope.biscasheet.gameList[i].p2_model != undefined)
              {
                total_game_player_2 += $scope.biscasheet.gameList[i].p2_model;
              }
          }

          $scope.biscasheet.p2_game_total = total_game_player_2;

          break;
        }
        case 3: //Update the total for player 3
        {
          var total_game_player_3 = 0;

          for(var i = 0; i < $scope.biscasheet.gameList.length; i++) 
          {
              if($scope.biscasheet.gameList[i].p3_model != undefined)
              {
                total_game_player_3 += $scope.biscasheet.gameList[i].p3_model;
              }
          }

          $scope.biscasheet.p3_game_total = total_game_player_3;

          break;
        }
        case 4: //Update the total for player 4
        {
          var total_game_player_4 = 0;

          for(var i = 0; i < $scope.biscasheet.gameList.length; i++) 
          {
              if($scope.biscasheet.gameList[i].p4_model != undefined)
              {
                total_game_player_4 += $scope.biscasheet.gameList[i].p4_model;
              }
          }

          $scope.biscasheet.p4_game_total = total_game_player_4;

          break;
        }
        default:
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.biscasheet.gameList.length; i++) 
          {
              if($scope.biscasheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.biscasheet.gameList[i].p1_model;
              }
          }

          $scope.biscasheet.p1_game_total = total_game_player_1;

          break;
        }
      }

      for(var i = 0; i < $scope.biscasheet.gameList.length; i++) 
      {
        if($scope.biscasheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.biscasheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.biscasheet.gameList[i].p1_model;
          }

          if($scope.biscasheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.biscasheet.gameList[i].p2_model;
          }

          if($scope.biscasheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.biscasheet.gameList[i].p3_model;
          }

          if($scope.biscasheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.biscasheet.gameList[i].p4_model;
          }

          $scope.biscasheet.gameList[i].total_model = total_game_row;
        }
      }



      //alert(game_row);
  };
  
})

// ||||||||||||||||||||||||||||||||||||-- CANASTA LOGIC --||||||||||||||||||||||||||||||||||||

.controller('canastaCtrl', function($scope, $stateParams) 
{

  //$scope = $scope;

  //$scope.showBannerAdView();

  $scope.showBannerAdView();

  $scope.addCanastaGame = function()
  {
    $scope.canastasheet.current_game++;

    $scope.canastasheet.gameList.push({ 
      number: $scope.canastasheet.current_game,
      text: "# " + String($scope.canastasheet.current_game), 
      p1_model: 0,
      p2_model: 0,
      p3_model: 0,
      p4_model: 0,
      total_model: 0
       });
  };

  $scope.setColorFromScore = function(player_no)
  {

    if($scope.canastasheet.p1_game_total == $scope.canastasheet.p2_game_total
      && $scope.canastasheet.p2_game_total == $scope.canastasheet.p3_game_total
      && $scope.canastasheet.p3_game_total == $scope.canastasheet.p4_game_total)
    {
      return 'color: black;';
    }
    else
    {
      var max, min;

      //Always check the last auction total score
      max = $scope.canastasheet.p1_game_total;

      if($scope.canastasheet.p2_game_total > max)
      {
        max = $scope.canastasheet.p2_game_total;
      }

      if($scope.canastasheet.p3_game_total > max && $scope.canastasheet.showThirdPlayer)
      {
        max = $scope.canastasheet.p3_game_total;
      }

      if($scope.canastasheet.p4_game_total > max && $scope.canastasheet.showFourthPlayer)
      {
        max = $scope.canastasheet.p4_game_total;
      }

      if($scope.canastasheet['p' + player_no + '_game_total'] == max)
      {
        return 'color: blue;';
      }

      //Always check the last auction total score
      min = $scope.canastasheet.p1_game_total;

      if($scope.canastasheet.p2_game_total < min)
      {
        min = $scope.canastasheet.p2_game_total;
      }

      if($scope.canastasheet.p3_game_total < min && $scope.canastasheet.showThirdPlayer)
      {
        min = $scope.canastasheet.p3_game_total;
      }

      if($scope.canastasheet.p4_game_total < min && $scope.canastasheet.showFourthPlayer)
      {
        min = $scope.canastasheet.p4_game_total;
      }

      if($scope.canastasheet['p' + player_no + '_game_total'] == min)
      {
        return 'color: red;';
      }
    }
  }

  $scope.getMaxScore = function()
  {
    var max = 0;

    if($scope.canastasheet.p1_game_total >= max)
    {
      max = $scope.canastasheet.p1_game_total;
    }

    if($scope.canastasheet.p2_game_total >= max)
    {
      max = $scope.canastasheet.p2_game_total;
    }

    if($scope.canastasheet.p3_game_total >= max)
    {
      max = $scope.canastasheet.p3_game_total;
    }

    if($scope.canastasheet.p4_game_total >= max)
    {
      max = $scope.canastasheet.p4_game_total;
    }

    return max;
  }

  $scope.getMaxPlayers = function(max)
  {
    var max_players = [];

    if($scope.canastasheet.p1_game_total == max)
    {
      max_players.push('1');
    }

    if($scope.canastasheet.p3_game_total == max)
    {
      max_players.push('3');
    }

    if($scope.canastasheet.p4_game_total == max)
    {
      max_players.push('4');
    }

    if($scope.canastasheet.p2_game_total == max)
    {
      max_players.push('2');
    }

    return max_players;
  }


  $scope.checkTotalForVictory = function()
  {
    var has_victory = false,
        max = 0,
        winner = "";

    max = $scope.getMaxScore();

    if(max < $scope.canastasheet.targetScore)  //Target score não foi atingida - partida seguinte
    {
      $scope.addCanastaGame();
      has_victory = true;
    }
    else
    {
      if($scope.getMaxPlayers(max).length == 1)  //Um só vencedor - incrementar vitória e recomeçar
      {
        var winner_model = "p" + $scope.getMaxPlayers(max)[0] + "_game_victories",
            winner_name = "p" + $scope.getMaxPlayers(max)[0] + "_name";

        $scope.canastasheet[winner_model]++;

        $scope.canastasheet.winner = $scope.canastasheet[winner_name] + "!";

        /*alert("Vencedor(a): " + $scope.canastasheet[winner_name] + "!"); */

        //$scope.restartCanastaScores();
        $scope.openCanastaModal(60);
      }
      else 
      {
        if(!$scope.canastasheet.showThirdPlayer) //Empate com 2 jogadores
        {
          /*alert("Empate! Vence quem tiver mais pontos na próxima partida."); */

          //$scope.addCanastaGame();      //partida seguinte (até ganhar)
          $scope.openCanastaModal(61);
          has_victory = true;
        }
        else // empate com + de 2 jogadores, Modal com o vector de $scope.getMaxPlayers(max)
        {
          $scope.canastasheet.playersMaxScore = $scope.getMaxPlayers(max);

          $scope.openCanastaModal(58);
        }
      }
    } 

    //if no scores matched the target score
    return has_victory;
  }

  $scope.pushSingleWinner = function(winner)
  {
    //alert("Winner is " + winner);
    $scope.canastasheet.winners = [];
    //$scope.canastasheet[winner + '_game_victories']++;

    $scope.canastasheet.winners.push(winner);
  }

  $scope.pushMultipleWinners = function(winners)
  {
    $scope.canastasheet.winners = [];

    for(var i = 0; i < winners.length; i++)
    {
      $scope.canastasheet.winners.push(winners[i]);
    }
  }

  $scope.addVictoryToWinners = function()
  {
    for(var i = 0; i < $scope.canastasheet.winners.length; i++)
    {
      $scope.canastasheet[$scope.canastasheet.winners[i] + '_game_victories']++;
    }
  }

  $scope.getWinnerFromModal = function()
  {
    for(var i = 0; i < scope.canastasheet.playersMaxScore; i++)
    {

    }

  }

  $scope.initCanastaScores = function()
  {
    //Totais
    $scope.canastasheet.p1_game_total = 0;
    $scope.canastasheet.p2_game_total = 0;
    $scope.canastasheet.p3_game_total = 0;
    $scope.canastasheet.p4_game_total = 0;

    //Victories
    $scope.canastasheet.p1_game_victories = 0;
    $scope.canastasheet.p2_game_victories = 0;
    $scope.canastasheet.p3_game_victories = 0;
    $scope.canastasheet.p4_game_victories = 0;

    //Game counter
    $scope.canastasheet.current_game = 1;

    //Hide 3rd and 4th player by default
    $scope.canastasheet.showThirdPlayer = 0;
    $scope.canastasheet.showFourthPlayer = 0;

    //Winner
    $scope.canastasheet.winner_name_modal = "0";

    //Configurations
    $scope.canastasheet.playerNumbers = [
    { text: "2", value: "2P"},
    { text: "3", value: "3P"},
    //{ text: "4", value: "4P"}
    ];

    $scope.canastasheet.gameList = [
    { number: 1, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, total_model: 0 }
    ];

    $scope.canastasheet.playerData = {
      players: '2P'
    };

    $scope.canastasheet.targetScore = 5000;

    $scope.canastasheet.playersMaxScore = [];

    $scope.canastasheet.winners = [];

    $scope.canastasheet.p1_name = "Nós";
    $scope.canastasheet.p2_name = "Eles";

    $scope.canastasheet.winner = "";
    
  };

  $scope.calculateWinner = function()
  {
    //First, search the totals for a number equal to the max score.
    //If no total equals the match score, ask the user who won:
    openCanastaModal(14);
  }

  $scope.setWinnerFromModal = function()
  {
    var winner = "";

    if($scope.canastasheet.winner_name_modal == "1")
    {
      winner = $scope.canastasheet.p1_name;

      $scope.canastasheet.p1_game_victories++;
    }else if($scope.canastasheet.winner_name_modal == "2")
    {
      winner = $scope.canastasheet.p2_name;

      $scope.canastasheet.p2_game_victories++;
    }else if($scope.canastasheet.winner_name_modal == "3")
    {
      winner = $scope.canastasheet.p3_name;

      $scope.canastasheet.p3_game_victories++;
    }else if($scope.canastasheet.winner_name_modal == "4")
    {
      winner = $scope.canastasheet.p4_name;

      $scope.canastasheet.p4_game_victories++;
    }

    alert("Vencedor(a): " + winner);

    $scope.restartCanastaScores();
  }

  //Called when a new game starts
  $scope.restartCanastaScores = function()
  {
    //Game counter
    $scope.canastasheet.current_game = 1;

    //Game rows
    $scope.canastasheet.gameList = [
    { number: 1, text: "# 1", p1_model: 0, p2_model: 0, p3_model: 0, p4_model: 0, total_model: 0 }
    ];

    //Totais
    $scope.canastasheet.p1_game_total = 0;
    $scope.canastasheet.p2_game_total = 0;
    $scope.canastasheet.p3_game_total = 0;
    $scope.canastasheet.p4_game_total = 0;

    $scope.canastasheet.winners = [];
  };

  $scope.getGameTotalScore = function(game_no)
  {

  };

  $scope.playerNumberChange = function(item) 
  {
    //console.log("Number of players:", item.text, "value:", item.value);
    //console.log($scope.canastasheet.playerData.players);

    switch($scope.canastasheet.playerData.players)
    {
      case '3P':
      {
        $scope.canastasheet.showThirdPlayer = 1;
        $scope.canastasheet.showFourthPlayer = 0;
        $scope.canastasheet.p1_name = "Jog. 1";
        $scope.canastasheet.p2_name = "Jog. 3";
        $scope.canastasheet.p3_name = "Jog. 2";
        break;
      }
      case '4P':
      {
        $scope.canastasheet.showThirdPlayer = 1;
        $scope.canastasheet.showFourthPlayer = 1;
        $scope.canastasheet.p1_name = "Jog. 1";
        $scope.canastasheet.p2_name = "Jog. 4";
        $scope.canastasheet.p3_name = "Jog. 2";
        $scope.canastasheet.p4_name = "Jog. 3";
        break;
      }
      default:
      {
        $scope.canastasheet.showThirdPlayer = 0;
        $scope.canastasheet.showFourthPlayer = 0;
        $scope.canastasheet.p1_name = "Nós";
        $scope.canastasheet.p2_name = "Eles";
        break;
      }
    }
  };

  $scope.targetScoreChange = function(item) 
  {
    console.log("Target Score:", item.text, "value:", item.value);
    console.log($scope.targetScoreData.targetScore);
  };

  //Reset the scores
  $scope.initCanastaScores();

  $scope.canastasheet.p1_name = "Nós";
  $scope.canastasheet.p2_name = "Eles";
  $scope.canastasheet.p3_name = "Jog. 3";
  $scope.canastasheet.p4_name = "Jog. 4";

  $scope.$watch('canastasheet.p1_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('canastasheet.p2_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  $scope.$watch('canastasheet.p3_game_1', function() 
  {
    $scope.calculateGameTotal(1);
  });

  /*$scope.addPlayer = function()
  {
    if($scope.canastasheet.showThirdPlayer == 1)
    {
      $scope.canastasheet.showFourthPlayer = 1;
    }
    else
    {
      $scope.canastasheet.showThirdPlayer = 1;
    }
  }*/


  $scope.calculateGameTotal = function(game_number)
  {
    //alert($scope.kingsheet.p1_notricks);

    var p1_game = 'p1_game_' + game_number,
        p2_game = 'p2_game_' + game_number,
        p3_game = 'p3_game_' + game_number,
        p1_game_score = $scope.canastasheet[p1_game],
        p2_game_score = $scope.canastasheet[p2_game],
        p3_game_score = $scope.canastasheet[p3_game],
        total = 0,
        total_game_model = 'total_game_' + game_number;

        if(p1_game_score != undefined)
        {
          if(!isNaN(p1_game_score))
          {
            total += p1_game_score;
          }
        }
        
        if(p2_game_score != undefined)
        {
          if(!isNaN(p2_game_score))
          {
            total += p2_game_score;
          }
        }

        if(p3_game_score != undefined)
        {
          if(!isNaN(p3_game_score))
          {
            total += p3_game_score;
          }
        }

        console.log(p1_game_score);
        console.log(p2_game_score);
        console.log(p3_game_score);
        console.log(total);

    $scope.canastasheet[total_game_model] = total;
  }

  $scope.changeGameTotalColor = function(game_number)
  {
    var game_no = game_number - 1;

    /*if($scope.canastasheet.gameList[game_no].total_model >= 11)
    {
      return "color: #94FF94;";
    }
    else
    {
      return "color: #EF473A;";
    }*/

    return "color: #FFFF00;";
  }

  $scope.updateGameRowTotal = function(game_row, player_no) 
  {
      //Update row (right) total
      for(var i = 0; i < $scope.canastasheet.gameList.length; i++) 
      {
        if($scope.canastasheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.canastasheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.canastasheet.gameList[i].p1_model;
          }

          if($scope.canastasheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.canastasheet.gameList[i].p2_model;
          }

          if($scope.canastasheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.canastasheet.gameList[i].p3_model;
          }

          if($scope.canastasheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.canastasheet.gameList[i].p4_model;
          }

          $scope.canastasheet.gameList[i].total_model = total_game_row;
        }
      }

      switch(player_no)
      {
        /*case 1: //Update the total for player 1
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.canastasheet.gameList.length; i++) 
          {
              if($scope.canastasheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.canastasheet.gameList[i].p1_model;
              }
          }

          $scope.canastasheet.p1_game_total = total_game_player_1;

          break;
        }*/
        case 2: //Update the total for player 2
        {
          var total_game_player_2 = 0;

          for(var i = 0; i < $scope.canastasheet.gameList.length; i++) 
          {
              if($scope.canastasheet.gameList[i].p2_model != undefined)
              {
                total_game_player_2 += $scope.canastasheet.gameList[i].p2_model;
              }
          }

          $scope.canastasheet.p2_game_total = total_game_player_2;

          break;
        }
        case 3: //Update the total for player 3
        {
          var total_game_player_3 = 0;

          for(var i = 0; i < $scope.canastasheet.gameList.length; i++) 
          {
              if($scope.canastasheet.gameList[i].p3_model != undefined)
              {
                total_game_player_3 += $scope.canastasheet.gameList[i].p3_model;
              }
          }

          $scope.canastasheet.p3_game_total = total_game_player_3;

          break;
        }
        case 4: //Update the total for player 4
        {
          var total_game_player_4 = 0;

          for(var i = 0; i < $scope.canastasheet.gameList.length; i++) 
          {
              if($scope.canastasheet.gameList[i].p4_model != undefined)
              {
                total_game_player_4 += $scope.canastasheet.gameList[i].p4_model;
              }
          }

          $scope.canastasheet.p4_game_total = total_game_player_4;

          break;
        }
        default:
        {
          var total_game_player_1 = 0;

          for(var i = 0; i < $scope.canastasheet.gameList.length; i++) 
          {
              if($scope.canastasheet.gameList[i].p1_model != undefined)
              {
                total_game_player_1 += $scope.canastasheet.gameList[i].p1_model;
              }
          }

          $scope.canastasheet.p1_game_total = total_game_player_1;

          break;
        }
      }

      for(var i = 0; i < $scope.canastasheet.gameList.length; i++) 
      {
        if($scope.canastasheet.gameList[i].number == game_row)
        {
          var total_game_row = 0;

          if($scope.canastasheet.gameList[i].p1_model != undefined)
          {
            total_game_row += $scope.canastasheet.gameList[i].p1_model;
          }

          if($scope.canastasheet.gameList[i].p2_model != undefined)
          {
            total_game_row += $scope.canastasheet.gameList[i].p2_model;
          }

          if($scope.canastasheet.gameList[i].p3_model != undefined)
          {
            total_game_row += $scope.canastasheet.gameList[i].p3_model;
          }

          if($scope.canastasheet.gameList[i].p4_model != undefined)
          {
            total_game_row += $scope.canastasheet.gameList[i].p4_model;
          }

          $scope.canastasheet.gameList[i].total_model = total_game_row;
        }
      }



      //alert(game_row);
  };
  
});

/*.controller('kingCtrl', function($scope, $stateParams) {
});*/
