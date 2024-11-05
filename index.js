const express = require('express')
const app = express()
const PATH = require('path')
const PORT = 6070


app.use(express.static(PATH.join(__dirname, "portal")))

app.get('/', (req, res) => {
    res.send("Welcome to MOUAU")
})


app.listen(PORT, () => {
    console.log("Server is running on PORT 6070");
    
})