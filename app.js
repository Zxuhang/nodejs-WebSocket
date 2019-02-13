var http = require('http');
var fs = require('fs');
var WebSocket = require('ws').Server;


var server = http.createServer(function(req,res){
    res.writeHead(200,{'Count-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html','utf8').pipe(res);
});

server.listen(12010);


var wss = new WebSocket({port:8080});

wss.on('connection', function (ws) {

    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
        
        // for(var i=0;i<wss.clients.length;i++){
        //     wss.clients[i].send(nameArr[n] + '：' + message);
        // }
        // message = JSON.parse(message)
        wss.clients.forEach(function each(client) {
         client.send(message);
        });
        
    });
    // n++;
});