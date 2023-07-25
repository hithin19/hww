const fs = require("fs");
const quote ="no beauty shines than that of agood heart"
fs.writeFile("awsm.html",quote,(err)=>{
    console.log("completed writing awesome.html")
});
fs.writeFile("text.ppt",quote,(err)=>{
    console.log("completed writing text.ppt")
})

