const axios = require("axios");
const fs = require("fs");
(async function(){
	var d = await axios.get("https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js");
	fs.writeFileSync(__dirname+"/peerjs.js", d.data);
})();