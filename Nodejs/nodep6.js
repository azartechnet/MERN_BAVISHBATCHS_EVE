var fs=require('fs')
//synchrous read
var data=fs.readFileSync('sample1.txt','utf8');
console.log(data.toString())
//Asynchrous read
fs.readFile('sample1.txt','utf8',function(err,data){
    if(err)
        console.log(err)
    else
        console.log(data)
})