

var os 	= require('os-utils');
var express = require('express');
var app = express();
const port = 3000
//const si = require('systeminformation');



app.get("/" ,async function(req,res){

  const freeMemory = os.freemem();
  console.log(freeMemory/1024)


  os.cpuUsage(async function(v){
    const cpu = 'CPU Usage (%): ' + v
    console.log( 'CPU Usage (%): ' + v );
  });

  await res.send(`<h1>Memory : ${freeMemory/1024} GB</h1><br /><h1>${cpu}</h1>`)
})


app.listen(port, function(){
    console.log(`express server is  ${port}`);
})   