const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/template`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error db:'));

db.once('open', function () {
    console.log('DataBase Connected!');
});

module.exports = db;