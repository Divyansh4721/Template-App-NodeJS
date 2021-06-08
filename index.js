const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const path = require('path');

const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
    src: path.join(__dirname, '/assets', '/scss'),
    dest: path.join(__dirname, '/assets', '/css'),
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));


app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assets'));


//make the uploads path available to the browser
// app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(expressLayouts);
//extract style and script from sub page in to layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


//use express router
app.use('/', require('./routes/index'));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});
