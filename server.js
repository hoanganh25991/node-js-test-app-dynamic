// require("appdynamics").profile({
// 	controllerHostName: 'originallyussg.saas.appdynamics.com',
// 	controllerPort: 443, 

// 	// If SSL, be sure to enable the next line
// 	// controllerSslEnabled: true,
// 	accountName: 'originallyussg',
// 	accountAccessKey: 'j3i8ckm981gf',
// 	applicationName: 'test-app-dynamic',
// 	tierName: 'tier2',
// 	nodeName: 'process' // The controller will automatically append the node name with a unique number
// });
//Lets require/import the HTTP module
let fs = require('fs');
let privateKey = fs.readFileSync('/etc/letsencrypt/live/tinker.press/privkey.pem');
let certificate = fs.readFileSync('/etc/letsencrypt/live/tinker.press/cert.pem');

let https = require('https');

let credentials = {key: privateKey, cert: certificate};

https.createServer(credentials, (req, res) => {
	console.log('a req come');
	res.writeHead(200);
	res.end('hello world\n');
	// res.write('hello world\n');
}).listen(3001, ()=>{console.log('server running')});