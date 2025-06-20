# Books Finder Google API Project

This repository contains two components:

- **Backend**: A Node.js server using Express and MySQL for managing data.
- **Frontend**: A Next.js application for displaying books using the Google Books API.

## Project Structure

```
root
├── backend    # Backend server
├── frontend   # Frontend application
```

---

## Backend

### Overview

The backend is built with Node.js and Express and uses MySQL for database management. It provides the APIs needed for the frontend to interact with.

### Features

- RESTful API
- MySQL database integration
- Environmental variables support using `dotenv`


## Frontend

### Overview

The frontend is a Next.js application designed to search and display books using the Google Books API.

### Features

- Built with Next.js
- Integrated with Tailwind CSS for styling
- React components with @headlessui/react and @heroicons/react

### Setup

1. **Install Dependencies**:

   ```bash
   cd frontend
   npm install
   ```

2. **Start the Application**:
   ```bash
   npm run dev
   ```

### Scripts

- `dev`: Runs the development server
- `build`: Builds the application for production
- `start`: Starts the production server
- `lint`: Runs ESLint to analyze code

---

## Running the Project

1. **Backend**:

   - Ensure the backend is running by following the steps in the Backend section.
   - It runs on `http://localhost:5000` by default.

2. **Frontend**:
   - Start the frontend by following the steps in the Frontend section.
   - It runs on `http://localhost:3000` by default.

---

## Technologies Used

### Backend

- Node.js
- Express
- MySQL
- dotenv
- axios
- cors
- nodemon

### Frontend

- Next.js
- React
- Tailwind CSS
- Google Books API
- @headlessui/react
- @heroicons/react

---
