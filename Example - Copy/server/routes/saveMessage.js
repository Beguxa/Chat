var express = require('express');
var router = express.Router();

var mongo = require("../schema/model");


router.post('/',function(req,res){
  var lastMsg = "";
    console.log("saveMessage start...");
  var newMessage = new mongo.messages({
        name : req.body.name + " >",
        message : req.body.message
    });

   newMessage.save(function(err,msg){
      if(err) console.log(err);
      else{
        mongo.messages.find().sort({_id : -1}).limit(10).exec(function(err,allMessages){
            console.log(allMessages);
            if(err) console.log("Error : ",err);
            else {
              var datas = allMessages;
              res.send(datas);
            }

        })
    }
    })
    console.log("saveMessage ends...");



});


module.exports = router;
