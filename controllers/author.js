
const Author = require('../models/author.model')


const getAuthorArticles = (req, res) => {
    Author.getName(req.params.id,(err, author, articles) => {
        if (err) {
            res.status(500).send({
                message :err.message || 'Some error occurred retrieving author data'
            })
        } else {
            console.log(author, articles)
            res.render('author', {
                articles: articles,
                author: author
            })
        }
    })
};


module.exports = {
    getAuthorArticles
};