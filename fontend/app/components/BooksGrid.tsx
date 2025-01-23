import Image from "next/image";
import React from "react";

interface Book {
  id: string; // Make sure you have an id or use isbn for uniqueness
  title: string;
  authors: string;
  isbn: string;
  thumbnail: string;
  previewLink: string;
  pageCount: BigInteger;
}

interface BooksGridProps {
  books: Book[];
}

const BooksGrid: React.FC<BooksGridProps> = ({ books }) => {
  if (books.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {books.map((book) => (
          <div key={book.id} className="group relative">
            <Image
              alt={book.title}
              src={book.thumbnail}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              width={40}
              height={80}
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={book.id}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {book.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{book.authors}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {book.pageCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksGrid;
