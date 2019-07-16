//import the module
var express = require ("express");
var fs = require("fs");
var bodyparser = require("body-parser");
var jwt = require("jwt-simple");


//create the rest object
var app = express();

//enable the cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //set json as MIME type
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended:false}));

  //create the get request
  app.post("/staticfile",function(req, res){
    fs.readFile("../sample.json",function(err, data){
      var uname = req.body.uname;
      var upwd = req.body.upwd;
        if(data[0]["username"]==uname && data[0]["password"]==upwd){
          var token = jwt.encode({'uname':uname, 'upwd':upwd},'secpassword');
          res.send({'login':'success','token':token});
        }
        else{
          res.send({'login':'fail'});
        }
    })
  });

  //create the post request
 /* app.post("/loginStatic",function(req, rest){
    fs.readFile("../sample.json",function(err, data){
        res.send(data);
        console.log(data);
    })
  });*/

  //assign the port no
  app.listen(8080);
  console.log("server listing the port no:8080");

  //create the 