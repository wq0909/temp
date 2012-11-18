var http = require('http'),
	sysDir = 'E:/elppa work';

http.createServer(function (request, response) {
  var url =  require('url').parse(request.url, true);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(url.pathname);
  response.end( );
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');


function loadFile(pathName){
	fs.readFile('/etc/passwd', function (err, data) {
	  if (err) throw err;
	  console.log(data);
	});
}