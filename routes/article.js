const Article = require('../models/article.model');

// show all articles - index page
const getAllArticles = (req, res) => {
    Articles.getAll((err, data) =>{
        if (err) {
            res.status(500).send({
                message : err.message || 'Some error occured retriving articles data'
            })
        } else {
            console.log(data)
            res.render('index', {
                articles: data
            })
        }
    })
};

// show articles by this slug
const getArticlesBySlug = (req, res) => {
    let query = `SELECT article.*, author.name AS authorName FROM artice INNER JOIN author`
    let article
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result;
        res.render('article', {
            article: article
        })
    })
};

// export controller function
module.exports = {
    getAllArticles,
    getArticlesBySlug
};