// const router = require('express').Router();
// const Articles = require('../database/models/article.model');//importation du model Mongoose pour creer un new doc mongoose à chaque requête de POST sur route/api/tweets
// const { articleList, articleCreate, articleDelete, articleEdit, articleUpdate } = require('../controllers/articles.controller');

// router.get('/blog', articleList );
// router.post('/blog/new', articleCreate );
// router.get('/blog/:articleId', article);
// router.get('/blog/edit/:articleId', articleEdit);
// router.post('/blog/update/:articleId', articleUpdate)
// router.delete('/blog/:articleId', articleDelete);


// router.get('/blog/:articleId', (req, res, next) => {
//     return res.json({
//         article: req.article.toJSON(),
//     })
// })

// router.patch('/blog/:id', (req, res, next) => {
//     const { body } = req;

//     if (typeof body.title !== 'undefined') {
//         req.article.title = body.title;
//     }

//     if (typeof body.author !== 'undefined') {
//         req.article.author = body.author;
//     }

//     if (typeof body.body !== 'undefined') {
//         req.article.body = body.body;
//     }

//     return req.article.save()
//         .then(() => res.json({ article: req.article.toJSON() }))
//         .catch(next);
// })

// router.post('/blog', (req, res, next) => {
//     const { body } = req;
//     const article = new Article(body);
//     return article.save()
//         .then(() => res.json({ article: article.toJSON() }))
//         .catch(next)
// });

// router.get('/blog/edit/:articleId');

// router.post('/blog/update/:articleId', (req, res, next) => {
//     return Articles.findByIdAndUpdate(req.article._id)
//         .then(() => res.sendStatus(200))
//         .catch(next)
// });

// router.delete('/blog/:articleId', (req, res, next) => {
//     return Articles.findByIdAndRemove(req.article._id)
//         .then(() => res.sendStatus(200))
//         .catch(next)
// });

// module.exports = router;