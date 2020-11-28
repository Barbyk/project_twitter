const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const userSchema = schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    local: {
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            match: [/^[\w-\.]+@([\w-]+?\.)+[\w-]{2,3}$/, 'Entrer un email valide']
        },
        password: {
            type: String ,
            required: true,
            match: [/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@$!%*?&#^]).{8,}$/, 
            'Le mot de passe doit être compris entre 8 et 12 caractère et doit contenir au mois 1 caractère minuscule, 1 caractère majuscule, 1 chiffre, et 1 caractère spécial.']
        }
    },
    avatar: {
        type: String,
        default: "/images/default-profile.png"
    },
    following: {
        type:[schema.Types.ObjectId],
        ref: 'user'
    }
});

//methode pour hashé (salé) le mdp
userSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password, 12);
}

//methode pour comparer le mdp hashé dans la bdd et celui fourni par l'user
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.local.password)
}

const User = mongoose.model('user', userSchema);

module.exports = User;
