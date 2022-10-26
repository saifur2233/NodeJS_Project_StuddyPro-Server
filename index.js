const express = require("express");
const cors = require('cors');
const app = express();

const courseCategory = require('./data/course-category.json');

app.use(cors());
const port = 5000;

app.get('/',(req, res)=>{
    res.send("This is home");
})

app.get('/course-category',(req, res)=>{
    res.send(courseCategory);
})

app.listen(port,()=>{
    console.log("Server is running", port);
})