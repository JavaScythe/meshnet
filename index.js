const express = require("express");
const app = express();
//init express router
//route requests to files or actions
app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/index.html");
});
app.listen(3000);//def port 4 goorm
console.log("on at :3000");