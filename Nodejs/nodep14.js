for(i=0;i<=5;i++)
{
    setTimeout(()=>{
        console.log("Inside setTime out")
    },3000)
    console.log("mynumber is::"+i)
}
console.log("print completed")