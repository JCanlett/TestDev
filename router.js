function route(handle, pathname, response) {
	console.log("About to route a request for " + pathname);
	
	if(typeof handle[pathname] === 'function') {
		handle[pathname](response);
	}
	else
	{
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type":"text/plain"});
		response.write("Cant find that shit bro, sorry");
		response.end();
	}
}
exports.route = route;
