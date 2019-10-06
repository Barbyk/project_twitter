const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://barbara:calavera@cluster0-oqhuq.gcp.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
        .then(() => console.log('connection ok !'))
        .catch( err => console.log(err));
