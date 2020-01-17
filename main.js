var http = require("http");
http.createServer(function(q,r) {
	r.end("HI there MAN what is UP?!" +Date.now());
}).listen(process.env.PORT || 880);
