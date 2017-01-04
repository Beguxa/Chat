clientApp.controller('chatCtrl',function($scope,$rootScope,$http,$interval,updateMessagesService){

  $http({
      method : "POST",
      url : "http://localhost:8888/loadMessages",
      data : {"name" : "Aditya"}
  }).then(function mySucces(response) {
    $scope.allMessages = updateMessagesService.updateMessagesFunction(response.data);
    console.log("Messages updated...");
  }, function myError(response) {});


  $interval(function () {
    $http({
        method : "POST",
        url : "http://localhost:8888/loadMessages",
        data : {"name" : "Stranger"}
    }).then(function mySucces(response) {
      $scope.allMessages = updateMessagesService.updateMessagesFunction(response.data);
      console.log("Messages updated...");
    }, function myError(response) {});
  }, 3000);


      $scope.sendMsg = function(){


            $http({
                method : "POST",
                url : "http://localhost:8888/saveMessage",
                data : {
                  'name' : $rootScope.myName,
                  'message' : $scope.message
                }
            }).then(function mySucces(response) {

              $scope.allMessages = updateMessagesService.updateMessagesFunction(response.data);
              $scope.message = "";
            }, function myError(response) {});

      };
});
