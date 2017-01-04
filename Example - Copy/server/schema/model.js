var mongo = {};
var mongoose = require('mongoose');


var messagesSchema = mongoose.Schema({
    name : String,
    message : String
});

mongo.messages = mongoose.model('messages', messagesSchema);

var onlinePeopleSchema = mongoose.Schema({
    name : String
});

mongo.onlinePeople = mongoose.model('onlinePeopleSchema', onlinePeopleSchema);

module.exports = mongo;
