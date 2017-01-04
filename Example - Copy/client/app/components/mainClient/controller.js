

'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
clientApp.controller('MainCtrl', function ($scope,$http,$rootScope) {

$scope.saveName = function(){
  var name = $scope.name;
  if(name == undefined){
    alert("You will talk as a Stranger");
    $rootScope.myName = "Stranger";
  }
  else {
    alert("You will talk as "+name);
    $rootScope.myName = name;
  }

}

  });
