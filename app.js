var http = require('http');
var fs = require('fs');

var myreadstream = fs.createReadStream('E:\\nodejs projects\\readme.txt');
var mywritestream = fs.createWriteStream(__dirname + '/write.txt');


myreadstream.on('data',function(chunk){
    console.log('read');
    mywritestream.write(chunk);
});



myreadstream.on('end',() => {
    console.log('end');
});

mywritestream.on('finish',() => {
    console.timeLog("findinshed");
});
var server = http.createServer(function(request,response){
    //response header
    //status
    //content type
    console.log(request.url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('listeinign');
