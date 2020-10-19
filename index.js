const express = require('express')
const app = express()
const port = 3030

app.get('/', (req , msg) =>{
    msg.send("Hello....!!!")
})
app.get('/boop', (req , msg) =>{
    msg.send("I got your nose...")
})

app.post('/' , (req , res) =>{
    res.send("Nothing is posted")
})
 
app.listen(port, () =>{
    console.log(`app listening at http://localhost: ${port}`)
})
