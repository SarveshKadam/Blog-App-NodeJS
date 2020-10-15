const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get('/',(req,res)=>{
    res.send('This is the artcle')
})

router.get('/new',(req,res)=>{
    res.render('articles/new')
})

router.post('/',(req,res)=>{
    const articel = new Article
})
module.exports = router