

var os 	= require('os-utils');
const si = require('systeminformation');
var express = require('express');
var app = express();
const {cpu} = require("./cpu")
const port = 3000
//const si = require('systeminformation');



app.get("/" ,async function(req,res){

  const freeMemory = os.freemem();
  console.log(os.totalmem()/1024 - freeMemory/1024)


  os.cpuUsage(async function(v){
    console.log( 'CPU Usage (%): ' + v );
  });

  //const usage = process.cpuUsage();
  //console.log(cpu())

  let cpu1 = si.currentLoad((i) => {
    console.log( i["currentLoad"])
  })
  
  


  await res.send(`<h1>Memory : ${freeMemory/1024} GB</h1><br /><h1>...</h1>`)
})


app.listen(port, function(){
    console.log(`express server is  ${port}`);
})   
