const express = require("express");
const cors = require("cors");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();

// Middleware
app.use(cors());

// Routes
app.use("/api/books", bookRoutes);

module.exports = app;
