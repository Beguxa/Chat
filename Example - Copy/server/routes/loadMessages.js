var express = require('express');
var router = express.Router();



var mongo = require("../schema/model");

router.post('/',function(req,res){
    console.log(req.body.name);
    if(req.body.name !== "Stranger"){
      var newPerson = new mongo.onlinePeople({
        name : req.body.name
      });

      newPerson.save(function(err,onlinePeople){
        if(err) console.log("Error");
        else {
          console.log(onlinePeople);
        }
      });
    }

    console.log("loadMessages start...");
    mongo.messages.find().sort({_id : -1}).limit(10).exec(function(err,allMessages){
        console.log(allMessages);
        if(err) console.log("Error : ",err);
        else {
          var datas = allMessages;
          res.send(datas);
        }

    })

    console.log("loadMessages ends...");




});


module.exports = router;
