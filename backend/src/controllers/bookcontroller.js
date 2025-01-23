const { fetchBooks } = require("../models/bookModel");

const getBooks = async (req, res) => {
  try {
    const books = await fetchBooks();
    res.json(books);
  } catch (error) {
    console.error("Error fetching books from database:", error.message);
    res.status(500).json({ error: "Failed to fetch books from database" });
  }
};

module.exports = { getBooks };
