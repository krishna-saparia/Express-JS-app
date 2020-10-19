const express = require('express')
const app = express()
const port = 3000

app.get('/', (req , res) =>{
    res.send("You're at Set on home page")
})

app.get('/clean', (req , res) =>{
    res.send("Erased everything...")
})

app.post('/' , (req , res) =>{
    res.send("Nothing is posted")
})
 
app.listen(port,() =>{
    console.log(`app listening at http://localhost: ${port}`)
})
