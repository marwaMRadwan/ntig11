const https = require('https')

const apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=30"

const req = https.request(apiUrl, (res)=>{
    let result = ""
    // console.log(res)
    res.on('data', (dataPart)=>{
        // console.log(dataPart.toString())
        // console.log('-------------')
        result+=dataPart.toString()
    })
    res.on('end', ()=>{
        console.log(JSON.parse(result))
    })
})
req.on('error', (err)=>{
    console.log(err)
})
req.end()