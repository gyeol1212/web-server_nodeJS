const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define Path for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Question : 그냥 이렇게 쓰면 안되나..?
// const publicDirectoryPath = '../public'

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Gyeol'
  });
});
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Gyeol'
  });
});
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'What can I help you',
    name: 'Gyeol'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Seoul',
    forecast: 'sunny'
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    res.send({
      erro: 'You must provide a search term'
    });
  }

  res.send({
    products: []
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'not Article',
    message: 'Help Article not found',
    name: 'Gyeol'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Page',
    message: 'Page not found',
    name: 'Gyeol'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
