const http = require('http')
const server = http.createServer((req, res) => {
    res.end('aaaa')
})
server.listen(1994, () => {
    console.log('start');

})
console.log(1);
console.log(444);
console.log(333);
