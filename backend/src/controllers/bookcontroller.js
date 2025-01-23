const { fetchBooks, fetchBookById } = require("../models/bookModel");

const getBooks = async (req, res) => {
  try {
    const books = await fetchBooks();
    res.json(books);
  } catch (error) {
    console.error("Error fetching books from database:", error.message);
    res.status(500).json({ error: "Failed to fetch books from database" });
  }
};

const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await fetchBookById(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    console.error("Error fetching book by ID:", error.message);
    res.status(500).json({ error: "Failed to fetch book by ID" });
  }
};

module.exports = { getBooks, getBookById };
