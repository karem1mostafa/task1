const http = require('http');
const server = http.createServer((req,res) =>{
    res.write('hello world\n')
    res.write('hello karem\n')
    res.write('welcom to my server\n')
res.end()
})
server.listen(3000,()=> console.log('server is lisent on port 3000'))