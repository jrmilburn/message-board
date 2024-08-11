const { Client } = require("pg");

const date1 = new Date().toISOString(); // Format date as a string that PostgreSQL can understand

const createTableSQL = `
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    message TEXT, 
    added TIMESTAMP
);
`;

const insertMessageSQL = `
INSERT INTO messages (name, message, added)
VALUES ($1);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://jrmilburn:password@localhost:5432/messages",
    });

    try {
        await client.connect();

        // Create the table if it doesn't exist
        await client.query(createTableSQL);

        // Insert the message
        await client.query(insertMessageSQL, ['Bryan', 'Hey guys', date1]);

        console.log("done");
    } catch (err) {
        console.error("Error executing query", err.stack);
    } finally {
        await client.end();
    }
}

main();
