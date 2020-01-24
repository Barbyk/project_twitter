require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');// module native nodejs
const index = require('./routes');
const errorHandler = require('errorhandler');
const env = require(`./environment/${ process.env.NODE_ENV }`)
require('./database/index');


const app = express();
module.exports = app;


app.set('views', path.join(__dirname, 'views'));//express va chercher le dossier views lorsqu'une vue lui sera demandée par la méthode render(), __dirname dispo grâce au module wrapper de nodejs
app.set('view engine', 'pug');// pug pour template engine, utilisé pour nos vues lorsqu'on fera res.render()

//configuration à ne pas oublié à importer dans app
require('./config/session.config');
require('./config/passport.config');

app.use(morgan('short')); //configutaion du middleware
app.use(express.static(path.join(__dirname, 'public')));//ressource statique demandée : cherche dans le dossier public
app.use(express.json());//utilisation des middleware pour parser facilement les body encodés en json ou urlencoded et de les mettre sur l'obj req.body
app.use(express.urlencoded({ extended: true }));
app.use(index);//montage du router

// app.use((req, res, next) => {
//     const err = new Error('Not Found'); //add image 404
//     err.status = 404;
//     next(err);
// });


// console.log(process.env.NODE_ENV); permet de vérifier si nous sommes en development/production
if (process.env.NODE_env === "development") {
    app.use(errorHandler());
} else {
    app.use((err, req, res, next) => {
        const code = err.code || 500;
        res.status(code).json({ //possibilité de créer une page HTML erreur 500 mais pas utile pour l'utilisateur
            code : code,
            message: code === 500 ? null : err.message
        });
    })
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("listen " + port );
});
