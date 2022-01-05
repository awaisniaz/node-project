import http, { createServer } from "http"

console.log(http)
createServer((req,res)=>{
    res.write("I am Awais Niaz")
    res.end()
}).listen(3000) 