const app = require("./app");
const fetchAndSaveBooks = require("./src/services/googleBooksService");

const PORT = 5000;

// fetch books on server start
fetchAndSaveBooks();

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
