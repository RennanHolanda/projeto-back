const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); 
app.set('views', './src/views');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.static(path.resolve('public'))); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const homeRouter = require('./src/routes/homeRouter');

app.use(homeRouter);

app.listen(3000, () => console.log('Rodando na porta 3000'))