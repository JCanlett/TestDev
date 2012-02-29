
var http = require("http");
var url = require("url");

//Called for any request to port 8888
function start(route, handle){
function onRequest(request, response) 
{
	var pathname = url.parse(request.url).pathname;
	console.log("Request for "+ pathname +" recieved.");
	
	route(handle, pathname, response);
	
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();		
}



  
http.createServer(onRequest).listen(8888);

console.log("Server has started.");
}
exports.start = start;

