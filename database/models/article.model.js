// const mongoose = require('mongoose');
// const schema = mongoose.Schema;

// const articleSchema = schema({
//     title: {
//         type : String,
//         required: [true, 'Titre requis']
//     },
//     body: { 
//         type: String,
//         required: [true, 'Champs requis'] 
//     },
//     author: {
//         type: schema.Types.ObjectId,
//         ref: 'user',
//         timestamps: true,
//         required: true
//     }
// });

// articleSchema.methods.toJSON = function() {
//     return {
//         _id: this._id,
//         title: this.title,
//         body: this.body,
//         author: this.author,
//         createdAt: this.createdAt,
//         updatedAt: this.updatedAt
//     };
// };

// const Article = mongoose.model('article', articleSchema);

// module.exports = Article;

// //ajout de message d'erreur de notre schema pour les models article