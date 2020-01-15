const app = require('../app');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { findUserPerEmail, findUserPerId  } = require('../queries/users.queries');

app.use(passport.initialize()); //initialisation obligatoire
app.use(passport.session()); //utilisation des sessions avec passport

//Apès l'authentification on stock que l'_id du user ds la session pour ne pas surcharger
passport.serializeUser((user, done) => {
    done(null, user._id)
})

// A chaque requête la session est récup par express-session en utilisant l'id de la session ds le cookie
// Passport récupère l'_id du user ds la session et exécute la méthode
// On récupère le user et l'_id et on les donne à Passport avec done(null, user)
// Passport le mettra sur req.user

passport.deserializeUser(async(id, done) => {
    try {
        const user = await findUserPerId(id);
        done(null, user)
    } catch(e) {
        done(e);
    }
})

//configauration de la strategie local
//on utilise email comme id et on utlise usernameField

passport.use('local', new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        //on recup l'user avc son email
        const user = await findUserPerEmail(email);
        if (user) {
            //si on le trouve on compare le mdp hashé dans la bdd
            // avc celui de l'user
            const match = await user.comparePassword(password);
            if (match) {
                //si match alors mdp ok
                done(null, user);
            } else {
                //si match pas, mdp pas bon et on donne une erreur
                done(null, false, { message: "Wrong password" });
            }
        } else {
            //si on trouve pas user, on donne une erreur
            done(null, false, { message: 'User not found' });
        }
    } catch(e) {
        done(e);
    }
}))