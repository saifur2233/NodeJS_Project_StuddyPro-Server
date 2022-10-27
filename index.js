const express = require("express");
const cors = require('cors');
const app = express();

const courseCategory = require('./data/course-category.json');
const coursesDetails = require('./data/course-details.json');

app.use(cors());
const port = 5000;

app.get('/',(req, res)=>{
    res.send("This is home");
})

app.get('/category',(req, res)=>{
    res.send(courseCategory);
})

app.get('/category/:id',(req, res)=>{
    const id = req.params.id;
    if(id === '06'){
        res.send(coursesDetails);
    }
    else{
        const category_course = coursesDetails.filter(n=> n.category_id === id);
        res.send(category_course);
    }
})

app.get('/courses',(req, res)=>{
    res.send(coursesDetails);
})

app.get('/courses/:id',(req, res)=>{
    const id = req.params.id;
    const selecteCourses = coursesDetails.find(n=> n._id === id);
    res.send(selecteCourses);
})

app.get('/news/:id',(req, res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n=> n._id === id);
    res.send(selectedNews);
})

app.listen(port,()=>{
    console.log("Server is running", port);
})