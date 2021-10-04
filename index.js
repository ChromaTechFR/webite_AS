const express = require("express");
const app = express();
const rootRoutes = require(__dirname + '/routes/root-routes');
const session = require('express-session')
const flash = require('connect-flash')

app.use(express.static('public'));

app.use(express.static(__dirname + 'public/css'))

app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}))

app.use(flash())

app.set('view engine', 'ejs');

app.use('/', rootRoutes);

app.listen(process.env.PORT, () => console.log("site allumé"));