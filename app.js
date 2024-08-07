const path = require('node:path');
const express = require('express');
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.get('/', (req, res) => {

    res.render('index', {title: "Mini Messageboard", messages: messages});

});

app.get('/new', (req, res) => {

    res.render('new');

});

app.listen(PORT, () => console.log('app started'));