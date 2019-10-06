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
            unique: true
        },
        password: {
            type: String ,
            required: true
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
