const fs=require("fs");
//creating a new file
//fs.writeFileSync("prashant.txt","welcome to my first file");
//fs.writeFileSync("prashant.txt","welcome to my channel");//it will override if it is present already


//fs.appendFileSync("prashant.txt","hii how are you i am fine")


const buf_data=fs.readFileSync("prashant.txt");
console.log(buf_data);
//node.js include an additional data type called buffer
//not available in browser javascript
//buffer is mainly used to strore binary data
//while reading from a file or receiving packets over the network