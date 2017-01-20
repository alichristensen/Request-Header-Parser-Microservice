var express = require('express'), 
	app = express(), 
	port = process.env.PORT || 5000;

var header = {
	ipaddress: "", 
	language: "", 
	software: "", 
}

app.get("/", function(req, res){
	res.send("FreeCodeCamp Backend API Projects")
})

app.get("/whoami", function(req, res){
	header.language = req.headers['accept-language'].slice(0, 5);
	header.software = softwareParser(req.headers['user-agent']);
	header.ipaddress = req.connection.remoteAddress ||
					req.connection.remoteAddress ||
					req.socket.remoteAddress;
	if (header.ipaddress.substr(0, 7) == "::ffff:") {
  		header.ipaddress = header.ipaddress.substr(7)
	}
	res.send(header);
});

function softwareParser(str) {
	var start = str.indexOf('(');
	var finish = str.indexOf(')');
	return (str.slice(start+1, finish));
}

app.listen(port, function() {
	console.log("listening at port " + port);
});