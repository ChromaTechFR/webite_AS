const express = require("express");
const app = express();
const rootRoutes = require(__dirname + '/routes/root-routes');

app.use(express.static('public'));

app.use(express.static( __dirname + 'public/css'))

app.use('/', rootRoutes);

app.set('view engine', 'ejs');

app.listen( 1234, () => console.log("site allumé"));