const http = require('http');
const fs = require('fs');
// const _ = require('loadash');

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);

    res.setHeader('content-type', 'text/plain')
    res.write('hello, sani')
    res.end();

});


server.listen(3000, 'localhost', () =>{
    console.log('listen for request on port 3000');
})