const express = require("express");
const app = express();
//init express router
//route requests to files or actions
app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/index.html");
});
app.get("/test",(req,res)=>{
	res.sendFile(__dirname+"/test.html");
});
app.get("/peerjs.js",(req,res)=>{
	res.sendFile(__dirname+"/peerjs.js");
})
app.listen(3000);//def port 4 goorm
console.log("on at :3000");