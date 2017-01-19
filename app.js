var express = require('express'), 
	app = express(), 
	port = process.env.PORT || 5000;

var header = {
	ipaddress: "", 
	language: "", 
	software: "", 
}

app.get("/", function(req, res){
	header.language = req.headers['accept-language'];
	header.software = req.headers['user-agent'];
	console.log(header);
	res.send(header);
});

app.listen(port, function() {
	console.log("listening at port " + port);
});