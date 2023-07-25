const fs = require("fs");
const quote ="i am getting a ice creamt"

fs.readFile("./cool.txt","utf-8",(err,data)=>{ 
    if (err){
    console.log("error",err)
}
     console.log(data)
});
//appeendadd to existing  files

fs.appendFile("nice.txt",quote,(err)=>{
    console.log(`completed writing noice .txt`)
})