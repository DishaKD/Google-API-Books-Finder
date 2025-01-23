const db = require("../database/connection");

const insertBook = async (book) => {
  const [rows] = await db.query("SELECT * FROM books WHERE id = ?", [book.id]);
  if (rows.length === 0) {
    await db.query(
      `INSERT INTO books (
        id, title, subtitle, authors, publisher, publishedDate, description,
        isbn_13, isbn_10, pageCount, categories, thumbnail, language,
        previewLink, infoLink, canonicalVolumeLink
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        book.id,
        book.title,
        book.subtitle,
        book.authors,
        book.publisher,
        book.publishedDate,
        book.description,
        book.isbn_13,
        book.isbn_10,
        book.pageCount,
        book.categories,
        book.thumbnail,
        book.language,
        book.previewLink,
        book.infoLink,
        book.canonicalVolumeLink,
      ]
    );
  }
};

const fetchBooks = async () => {
  const [rows] = await db.query("SELECT * FROM books");
  return rows;
};

const fetchBookById = async (id) => {
  const query = `
    SELECT title, description, authors, isbn_13 
    FROM books 
    WHERE id = ?;
  `;

  const [rows] = await db.query(query, [id]);

  if (rows.length === 0) {
    return null;
  }

  return rows[0];
};

module.exports = { insertBook, fetchBooks, fetchBookById };
