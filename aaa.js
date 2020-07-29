const http = require('http')
const server = http.createServer((req, res) => {
    res.end('aaaa')
})
server.listen(1994, () => {
    console.log('start');

})
console.log('left');
console.log('left');
console.log('right');

console.log('right');
