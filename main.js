var http = require("http");
http.createServer(function(q,r) {
	r.end("HI");
}).listen(process.env.PORT || 880);