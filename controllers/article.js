
const con = require('../utils/db');


const getAllArticles = (req, res) =>  {
    let query = "SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {
            articles: articles
        })
    })
};

// show articles by this slug
const getArticleBySlug = (req, res) => {
    Articles.getBySlug(req.params.slug, (err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message || 'Some error occurred retrieving article data'
            })
        } else {
            console.log(data)
            res.render('article', {
                article:data
            })
        }
    })
};



module.exports = {
    getAllArticles,
    getArticleBySlug
};