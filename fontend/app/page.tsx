"use client";

import React, { useEffect, useState } from "react";
import BooksGrid from "../app/components/BooksGrid";

interface Book {
  id: string;
  title: string;
  authors: string;
  isbn: string;
  thumbnail: string;
  previewLink: string;
  pageCount: BigInteger;
}

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <BooksGrid books={books} />
    </div>
  );
};

export default Home;
