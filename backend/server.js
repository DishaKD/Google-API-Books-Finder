const app = require("./app");
const runMigrations = require("./database/migrations");
const fetchAndSaveBooks = require("./services/googleBooksService");

const PORT = 5000;

// Run migrations and fetch books on server start
runMigrations().then(() => fetchAndSaveBooks());

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
