const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
const port = 5000;

app.get('/',(req, res)=>{
    res.send("This is home");
})

app.listen(port,()=>{
    console.log("Server is running", port);
})