/**
 * Created by pc on 2016/10/11.
 */
var io = require('socket.io').listen(2016,'192.168.1.111');
io.sockets.on('connection',function(socket){
    socket.emit('news',{hello: 'word'});
    socket.on('my other event',function(data){
        console.log(data);
    })
})