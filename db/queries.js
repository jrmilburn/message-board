const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages;");
    return rows; 
}

async function addMessage(message)  {
    await pool.query(`INSERT INTO messages (name, message, added) VALUES ($1, $2, $3);`, [message.name, message.message, message.added]);
}

async function editMessage() {

}

async function deleteMessage() {

}

module.exports = {
    getAllMessages,
}