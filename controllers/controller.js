const db = require("../db/queries");

async function messagesGet(req, res) {

    const messages = await db.getAllMessages();
    res.send(messages);

}

module.exports = {
    messagesGet,
}