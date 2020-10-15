const { request, response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const articleRouter = require('./routes/articles')

mongoose.connect("mongodb://localhost/blog",{useNewUrlParser : true , useUnifiedTopology:true,useCreateIndex : true})

app.set('view engine','ejs')

app.get('',(request,response)=>{
    const articles = [{
        title : "Test article",
        createdAt : new Date(),
        description : "Test Description"
    },
    {
        title : "Test article2",
        createdAt : new Date(),
        description : "Test Description 2"
    }]
    response.render('articles/index',{articles})
})

app.use('/articles',articleRouter)


app.listen(5000)