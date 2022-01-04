var http = require("http")

console.log(http)
http.createServer((req,res)=>{
    res.write("I am Awais Niaz")
    res.end()
}).listen(3000)