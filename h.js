//console.log(process.argv)
//destructure
//const [, ,n1,n2] = process.argv
//console.log(n1,n2)
const fs = require("fs");
const quote2 ="live more worry less"

const[ , ,nooffiles] = process.argv;
console.log(nooffiles)

for(let i=1;i<=nooffiles;i++){
    fs.writeFile(`./backup/text-${i}.txt`,quote2,(err)=>{
        console.log(`completed writing text-${i}.txt`)
    });
}
