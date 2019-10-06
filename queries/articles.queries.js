// //creation des requêtes que nous avons besoin et les transmettre au controller = MVC
// const Article = require('../database/models/article.model');//importation du model Mongoose pour creer un new doc mongoose à chaque reqête de POST sur route/api/tweets

// exports.getArticles = () => {
//     return Article.find({}).exec();
// }

// exports.createArticle = (article) => {
//     const newArticle = new Article(article);
//     return newArticle.save();
// }

// exports.getArticle = (articleId) => {
//     return Article.findOne({ _id: articleId }).exec();
// }

// exports.updateTweet = (articleId, article) => {
//     return Article.findByIdAndUpdate(articleId, { $set: article }, {runValidators: true });
// }

// exports.deleteArticle = (articleId) => {
//     return Article.findByIdAndDelete(articleId).exec();
// }