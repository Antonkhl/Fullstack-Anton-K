const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req,res) => {
    res.render('index')
})

app.get('/index2', (req,res) => {
    res.render('index2')
})

app.get('/aboutus', (req,res) => {
    res.render('aboutus')
})

app.get('/createcategory', (req,res) => {
    res.render('createcategory')
})

app.get('/createpost', (req,res) => {
    res.render('createpost')
})

app.get('/logIn', (req,res) => {
    res.render('logIn')
})

app.get('/loginsucessful', (req,res) => {
    res.render('loginsucessful')
})

app.get('/register', (req,res) => {
    res.render('register')
})

app.get('/registersucessful', (req,res) => {
    res.render('registersucessful')
})

app.get('/post1', (req,res) => {
    res.render('post1')
})








app.listen(port, () => console.info('working!'))