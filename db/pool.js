const { Pool } = require("pg");
require('dotenv').config();

const { HOST, USER, DATABASE, PASSWORD, PORT } = process.env;