function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>
            {
                resolve("Done waiting....")
            },3000)
        
    })
}
async function showData(){
    console.log("waiting...");
    const result=await getData()
    console.log(result)
}

showData()