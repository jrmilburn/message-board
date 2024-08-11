const path = require('node:path');
const express = require('express');
const app = express();
const newRouter = require("./routes/newRouter");
const router = require("./routes/router");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use("/new", newRouter);

const port = process.env.APP_PORT || 3000;

app.listen(port, () => console.log('app started'));