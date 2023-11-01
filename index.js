const express = require('express')

const PORT = process.env.PORT || 4040

const {handler} = require("./app")


const app = express()

app.use(express.json())

app.get("*",async (req,res)=>{
    console.log(`POST request ${req.body}`)
    res.send(await handler(req))
})

app.post("*",async (req,res)=>{

    console.log("POST request ",JSON.stringify(req.body, null, 2));
    res.send(await handler(req))
})

app.listen(PORT,(error)=>{
   if(error) console.log(error)

   console.log("Server started on PORT",PORT)

})


