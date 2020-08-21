
let http = require('http');
let express = require('express');
let fs = require("fs");

let server=express();
server.listen(8888);
console.log('Server is running on port 8888');


server.use(express.static(__dirname));

//Configuration

let cf = fs.readFileSync("config.json");
let config=JSON.parse(cf);


//Twig
server.set('view engine','twig');
server.set('views', '.');



let curr="main";


let obj={
    menu: config.menuitems,
    sitename:config.sitename,
    current:curr,
    kappa:config.kappa
};

//Routers
server.get('/', function(req, res){
    obj.current="main";
    obj.content="./maincontent.twig";
    res.render(__dirname+"/mastertemplate.twig",obj);

});

server.get('/main', function(req, res){
    obj.current="main";
    obj.content="./maincontent.twig";
    res.render(__dirname+"/mastertemplate.twig",obj);
});

server.get('/algorithm', function(req, res){
    obj.current="algorithm";
    obj.content="./algorithm.twig";
    res.render(__dirname+"/mastertemplate.twig",obj);
});

server.get('/aboutproject', function(req, res){
    obj.current="aboutproject";
    obj.content="./aboutproject.twig";
    res.render(__dirname+"/mastertemplate.twig",obj);
});