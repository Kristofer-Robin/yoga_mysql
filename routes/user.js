const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user');


router.get('/login', userController.login);
router.get('/:slug', userController.getArticleBySlug);

module.exports = router;