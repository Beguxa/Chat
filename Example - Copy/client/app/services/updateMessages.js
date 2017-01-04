clientApp.service("updateMessagesService",function($http){
   this.updateMessagesFunction = function(data){
     var allMessages = [];

     for(i in data){
       var message = {name : "",
       message : ""
     };

     message.name = data[i].name;
     message.message =data[i].message;
     allMessages.push(message);

     }
     return allMessages.reverse();
   };
});
