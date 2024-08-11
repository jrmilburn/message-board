const db = require("../db/queries");

async function messagesGet(req, res) {

    const messages = await db.getAllMessages();
    res.render('index', {title: "Mini Messageboard", messages: messages});

}

async function messageAdd(req, res) {
    const added = new Date().toISOString();
    const message = {
        name: req.body.name,
        message: req.body.message,
        added: added
    }
    await db.addMessage(message);
    res.redirect("/");
}

async function messageOpen(req, res) {

    const messages = await db.getAllMessages();
    const message = messages.find(message => message.id === +req.params.index);
    if(message) {
        res.render('message', { message: message });
    } else {
        res.status(404).send('Message not found');
    }

}

async function messagesDelete(req, res) {

    await db.deleteMessages();
    res.redirect('/');

}

module.exports = {
    messagesGet,
    messageAdd,
    messageOpen,
    messagesDelete
}