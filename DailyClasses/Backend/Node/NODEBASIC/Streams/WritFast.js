const fs=require('fs');

(async()=>{
    const writeStream=fs.createWriteStream('Streams/Data2.csv')
    for(let i=0;i<1e2;i++){ //1e8
        const data= writeStream.write(`${i},${i+2}\n`)
        //handling pressure / buffer
        if(!data){
            await new Promise((resolve)=>
            writeStream.once('drain',resolve))
        }
        // drain is predefined event in large data or error create or handle the writefile operation
        // consider example of tap water bucket bottle for drain explanation
        // 5liter - 1liter -one by one - handling pressure/flow and empty bottle - in bucket get added
        // once - ensure the event is triggered and remove event after operation 

    }
    writeStream.end()
    // monolithic way service provider-- whole data in one go
    // microservices way service provider-- one by one executed
})()