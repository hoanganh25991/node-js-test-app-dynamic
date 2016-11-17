require("appdynamics").profile({
	controllerHostName: 'originallyussg.saas.appdynamics.com',
	controllerPort: 443, 

	// If SSL, be sure to enable the next line
	controllerSslEnabled: true,
	accountName: 'originallyussg',
	accountAccessKey: 'j3i8ckm981gf',
	applicationName: 'test-app-dynamic',
	tierName: 'tier2',
	nodeName: 'process' // The controller will automatically append the node name with a unique number
});
//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=3000; 

//We need a function which handles requests and send response
function handleRequest(request, response){
	console.log('A req come');
	response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
	//Callback triggered when server is successfully listening. Hurray!
	console.log("Server listening on: http://localhost:%s", PORT);
});