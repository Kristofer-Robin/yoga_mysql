const express = require('express')
const app = express()

const path = require('path')
const hbs = require('express-handlebars')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine('hbs', hbs.engine( {
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "joga_ mysql"
});

con.connect( (err) => {
    if (err) throw err;
    console.log("database server is Connected!");
});

app.get('/', (reg, res) => {
    let sql = `SELECT * FROM article WHERE slug="${reg.params.slug}"`
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.render('index', {
            article: result
        })
    })
})

app.get('/article/:slug')

app.listen(3006, () => {
    console.log('web server is started')
})
