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

### Setup

1. **Install Dependencies**:
    ```bash
    cd backend
    npm install
    ```

2. **Environment Variables**:
    Create a `.env` file in the `backend` directory and add the required variables:
    ```env
    DB_HOST=your-database-host
    DB_USER=your-database-username
    DB_PASSWORD=your-database-password
    DB_NAME=your-database-name
    ```

3. **Run Migrations**:
    Ensure your MySQL database is running, then execute:
    ```bash
    npm run migrate
    ```

4. **Start the Server**:
    ```bash
    npm start
    ```

### Scripts
- `start`: Starts the backend server using `nodemon`
- `migrate`: Executes database migration using `migration.sql`
- `dev`: Starts the backend server in development mode
- `test`: Placeholder for tests

---

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

2. **Environment Variables**:
    Create a `.env.local` file in the `frontend` directory and add the required variables:
    ```env
    NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
    GOOGLE_API_KEY=your-google-api-key
    ```

3. **Start the Application**:
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
    - It runs on `http://localhost:3000` by default.

2. **Frontend**:
    - Start the frontend by following the steps in the Frontend section.
    - It runs on `http://localhost:3001` by default.

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

## Future Improvements
- Add proper testing for both backend and frontend.
- Dockerize the application for easier deployment.
- Add user authentication.
- Implement caching for API requests.

---

## License
This project is licensed under the ISC License.

