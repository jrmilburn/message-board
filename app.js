const path = require('node:path');
const express = require('express');
const app = express();
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/new", newRouter);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.render('index', {title: "Mini Messageboard", messages: messages});

});

app.post('/new', (req, res) => {

    const messageUser = req.body.name;
    const messageText = req.body.message;

    messages.push({ text: messageText, 
                    user: messageUser, 
                    added: new Date() });

    res.redirect('/');

});

app.get('/message/:index', (req, res) => {

    const message = messages[req.params.index];
    if(message) {
        res.render('message', { message: message });
    } else {
        res.status(404).send('Message not found');
    }

})

app.listen(port, () => console.log('app started'));