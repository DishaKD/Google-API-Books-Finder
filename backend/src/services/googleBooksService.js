const axios = require("axios");
const { insertBook } = require("../models/bookModel");

const fetchAndSaveBooks = async () => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=api"
    );
    const books = response.data.items.map((item) => ({
      id: item.id,
      title: item.volumeInfo.title,
      subtitle: item.volumeInfo.subtitle,
      authors: item.volumeInfo.authors?.join(", "),
      publisher: item.volumeInfo.publisher,
      publishedDate: item.volumeInfo.publishedDate,
      description: item.volumeInfo.description,
      isbn_13: item.volumeInfo.industryIdentifiers?.find(
        (id) => id.type === "ISBN_13"
      )?.identifier,
      isbn_10: item.volumeInfo.industryIdentifiers?.find(
        (id) => id.type === "ISBN_10"
      )?.identifier,
      pageCount: item.volumeInfo.pageCount,
      categories: item.volumeInfo.categories?.join(", "),
      thumbnail: item.volumeInfo.imageLinks?.thumbnail,
      language: item.volumeInfo.language,
      previewLink: item.volumeInfo.previewLink,
      infoLink: item.volumeInfo.infoLink,
      canonicalVolumeLink: item.volumeInfo.canonicalVolumeLink,
    }));

    for (const book of books) {
      await insertBook(book);
    }
    console.log("Books updated in the database");
  } catch (error) {
    console.error("Error fetching and saving books:", error.message);
  }
};

module.exports = fetchAndSaveBooks;
