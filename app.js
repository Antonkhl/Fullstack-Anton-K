const express = require('express')
const app = express()
const port = 3000

const staticDir = __dirname + '\\public\\'
app.use(express.static(staticDir))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', (req,res) => {
    res.render( __dirname + '/views/index.ejs')
})

app.get('/index2', (req,res) => {
    res.render(__dirname + '/views/index2.ejs')
})

app.get('/aboutus', (req,res) => {
    res.render(__dirname + '/views/aboutus.ejs')
})

app.get('/createcategory', (req,res) => {
    res.render(__dirname + '/views/createcategory.ejs')
})

app.get('/createpost', (req,res) => {
    res.render(__dirname + '/views/createpost.ejs')
})

app.get('/logIn', (req,res) => {
    res.render(__dirname + '/views/logIn.ejs')
})

app.get('/loginsucessful', (req,res) => {
    res.render(__dirname + '/views/loginsucessful.ejs')
})

app.get('/register', (req,res) => {
    res.render(__dirname + '/views/register.ejs')
})

app.get('/registersucessful', (req,res) => {
    res.render(__dirname + '/views/registersucessful.ejs')
})

app.get('/post1', (req,res) => {
    res.render(__dirname + '/views/post1.ejs')
})

app.get('/post2', (req,res) => {
    res.render(__dirname + '/views/post2.ejs')
})

app.get('/post3', (req,res) => {
    res.render(__dirname + '/views/post3.ejs')
})

app.get('/category1', (req,res) => {
    res.render(__dirname + '/views/category1.ejs')
})

app.get('/category2', (req,res) => {
    res.render(__dirname + '/views/category2.ejs')
})

app.get('/category3', (req,res) => {
    res.render(__dirname + '/views/category3.ejs')
})









app.listen(port, () => console.info('working!'))