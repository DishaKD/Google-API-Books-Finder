const express = require("express");
const { getBooks, getBookById } = require("../controllers/bookcontroller");
const router = express.Router();

//Retrieve all books
router.get("/", getBooks);

//Retrieve books by ID
router.get("/:id", getBookById);

module.exports = router;
