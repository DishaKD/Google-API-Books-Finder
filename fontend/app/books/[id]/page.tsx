"use client";

import React, { useEffect, useState } from "react";
import { use } from "react";

interface Book {
  id: string;
  title: string;
  authors: string;
  isbn_13: string;
  thumbnail: string;
  previewLink: string;
  pageCount: number;
  description: string;
  subtitle: string;
  publisher: string;
  publishedDate: string;
  categories: string;
  language: string;
}

interface BookDetailProps {
  params: Promise<{ id: string }>;
}

const BookDetail: React.FC<BookDetailProps> = ({ params }) => {
  const { id } = use(params);

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBookDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError("Error fetching book details.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!book) return <div>Book not found</div>;

  return (
    <div className="book-detail p-6 flex">
      {/* Left side - Thumbnail */}
      <div className="flex-shrink-0 w-64 h-96 mb-6">
        <img
          src={book.thumbnail}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Book details */}
      <div className="ml-6 flex flex-col justify-between">
        {/* Title and Subtitle */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-700 mb-4">{book.subtitle}</p>{" "}
          {/* Subtitle */}
        </div>

        {/* Authors, Publisher, ISBN */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Authors: {book.authors}</p>
          <p className="text-lg font-semibold">Publisher: {book.publisher}</p>
          <p className="text-lg font-semibold">ISBN: {book.isbn_13}</p>
        </div>

        {/* Published Date, Page Count, Categories, Language */}
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Published Date: {book.publishedDate}
          </p>
          <p className="text-lg font-semibold">Page Count: {book.pageCount}</p>
          <p className="text-lg font-semibold">Categories: {book.categories}</p>
          <p className="text-lg font-semibold">Language: {book.language}</p>
        </div>

        {/* Description */}
        <div className="text-justify">
          <p className="mb-4">{book.description}</p>
        </div>

        {/* Preview Link */}
        <a
          href={book.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Preview this book
        </a>
      </div>
    </div>
  );
};

export default BookDetail;
