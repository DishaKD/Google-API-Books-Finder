CREATE DATABASE IF NOT EXISTS books_db;
USE books_db;

CREATE TABLE IF NOT EXISTS books (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255),
        subtitle VARCHAR(255),
        authors VARCHAR(255),
        publisher VARCHAR(255),
        publishedDate VARCHAR(50),
        description TEXT,
        isbn_13 VARCHAR(50),
        isbn_10 VARCHAR(50),
        pageCount INT,
        categories VARCHAR(255),
        thumbnail VARCHAR(255),
        language VARCHAR(10),
        previewLink VARCHAR(255),
        infoLink VARCHAR(255),
        canonicalVolumeLink VARCHAR(255)
);