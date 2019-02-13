var WebSocket = require('ws').Server;
var wss = new WebSocket({port:8080});
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
        
        
        wss.clients.forEach(function each(client) {
         client.send('你说：' + message);
        });
        
    });
});