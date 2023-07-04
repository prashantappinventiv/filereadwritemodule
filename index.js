const http=require("http");
const server=http.createServer((req,res)=>{
    res.end('hello from the other we are here');
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening no 80000");
});//portno,hostnumber