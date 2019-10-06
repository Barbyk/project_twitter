const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards.config');
const tweets = require('./tweets.routes');
const users = require('./users.routes');
const auth = require('./auth.routes');

router.use('/tweets', ensureAuthenticated, tweets); //creation instance pour route tweets
router.use('/users', users); //creation instance pour route users
router.use('/auth', auth); // creation pour les routes liés à l'authentification

router.get('/',(req, res) => {
    res.redirect('/tweets');
})

module.exports = router;

//creation du router pour toutes les requêtes Http entrantes, comme middleware