const app = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

app.use(session({
    secret:process.env.SESSION,
    resave: false, //pour ne pas save la session dans le store
    saveUninitialized: false, //pour ne pas garder save les sessions vides dans le store
    cookie: {
        httpOnly: false, //pour rendre le cookie disponible coté navigateur
        maxAge: 1000 * 60 * 24 * 14 //session de deux semaines en millisecondes
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 60 * 60 * 24 * 14 // deux semaines en seconde égale à maxAge
    })
}))