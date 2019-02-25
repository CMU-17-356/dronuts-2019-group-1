'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.get('/api/donuts', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = [
    {
      id: 0,
      name: 'Apple Krumb',
      description: 'Liquorice wafer cupcake toffee chupa chups donut candy',
      price: 3.50,
      img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg',
    }, {
      id: 1,
      name: 'Bavarian Kreme',
      description: 'Pastry gummies sweet roll lemon. Brownie soufflé danish',
      price: 2.50,
      img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg',
    }, {
      id: 2,
      name: 'Boston Kreme',
      description: 'Chocolate chocolate fruitcake oat cake jujubes cheesecake.',
      price: 4.25,
      img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/boston_kreme.jpg',
    }, {
      id: 3,
      name: 'Chocolate Kreme',
      description: 'Chocolate jujubes gummies carrot cake donut dessert caramels sweet roll.',
      price: 3.50,
      img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/chocolate_kreme.jpg',
    }, {
      id: 4,
      name: 'Cinamon Sugar',
      description: 'Croissant ice cream cake muffin halvah. Tiramisu tiramisu.',
      price: 3.75,
      img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/cinnamon_sugar.jpg',
    }, {
      id: 5,
      name: 'Jelly',
      description: 'Sesame snaps cake sesame snaps. Jujubes brownie soufflé chocolate. Apple pie icing dessert sweet roll topping. Lollipop pastry gummi bears.',
      price: 2.95,
      img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/jelly.jpg',
    }, {
      id: 6,
      name: 'Powdered Sugar',
      description: 'Gummies candy wafer candy. Pudding cake marzipan oat cake marzipan bonbon.',
      price: 3.95,
      img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/powdered_sugar.jpg',
    }, {
      id: 7,
      name: 'Strawberry Frosted',
      description: 'Liquorice donut tootsie roll. Jelly-o dessert brownie sesame snaps ice cream macaroon. Soufflé sweet tart.',
      price: 5.00,
      img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/strawberry_frosted.jpg',
    }, {
      id: 8,
      name: 'Blueberry',
      description: 'Cheesecake fruitcake pudding. Cotton candy pastry chocolate sesame snaps jujubes cookie chupa chups. Fruitcake dragée.',
      price: 4.00,
      img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/blueberry.jpg',
    },
  ]
  res.send(JSON.stringify(data, null, 2));
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
module.exports = app;
