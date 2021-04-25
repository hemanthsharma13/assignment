
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb+srv://hemanth:hemanth123@cluster0.pi4b7.mongodb.net/Assign?retryWrites=true&w=majority';

MongoClient.connect(url,function(err,db){
      if (err) throw err ;

    var dbi = db.db('assign');
    dbi.createCollection("movies", function(err,res){
      if (err) throw err;
      console.log("collection created");
      db.close();

    })


})