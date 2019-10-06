// const { getArticles, createArticle, deleteArticle, getArticle, updateArticle } = require('../queries/articles.queries');


// exports.articleList = async (req, res, next) => {
//         await getArticles()
//         .sort({ createdAt: 'descending' })
//         .then((articles) => {
//             res.json({
//                 articles: articles.map(articles => articles.toJSON())
//             })
//         })
//     .catch(next)
// }

// exports.article = async (req, res, next) => {
//     try {
//         await getArticle();
//         res.json({
//             article: req.article.toJSON()
//         });
//     } catch(e) {
//     next(e)
//     }
// }

// exports.articleCreate = async (req, res, next) => {
//     try {
//         const body = req.body;
//         const author = req.user._id;
//         await createArticle({...body, author}) //enregistrement du doc dans la bdd MongoDB et mongoose retourne une promesse
//         res.json({...body, author}) // si save ok, redirection sur '/'
//     } catch(e) { //si erreur de validation ou err save dans bdd
//         const errors = Object.keys(e.errors).map(key => e.errors[key].message);
//         res.status(400).json({ errors }); //modification de notre objet d'erreur pour avoir un tab pour itérer dessus dans les templates
//     } //affichage du template form mais avec l'erreur
// }

// exports.articleDelete = async (req, res, next) => {
//     try {
//         const articleId = req.params.articleId;
//         await deleteTweet(articleId);
//         res.sendStatus(200)
//         const articles = await getArticles()
//         res.json({
//             articles: articles.map(articles => articles.toJSON())
//         })
//     } catch(e) {
//         next(e);
//     }
// }

// exports.articleEdit = async (req, res, next) => {
//     try {
//         const articleId = req.params.articleId;
//         const article = await getTweet(articleId)
//         res.json( { article });
//     } catch(e) {
//         next(e)
//     }
// }

// exports.articleUpdate = async (req, res, next) => {
//     const articleId = req.params.articleId;    
//     try {
//         const body = req.body;
//         await updateTweet(articleId, body);
//         res.json({articleId, body})
//     } catch(e) {
//         const errors = Object.keys(e.errors).map(key => e.errors[key].message);
//         const article = await getArticle(articleId)
//         res.status(400).json({ errors, article });
//     }

// }