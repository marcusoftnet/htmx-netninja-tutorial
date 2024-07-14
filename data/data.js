const BOOKS_DATA = [
  { id: 1, title: "The Final Empire", author: "Brandon Sanderson" },
  { id: 2, title: "The Way of Kings", author: "Brandon Sanderson" },
];

export const getNextId = () => Math.max(...BOOKS_DATA.map((b) => +b.id)) + 1;

export const addBook = (title, author) => {
  const book = {
    id: getNextId(),
    title: title,
    author: author,
  };
  BOOKS_DATA.push(book);
  return book;
};

export const getBook = (id) =>
  BOOKS_DATA.find((b) => b.id.toString() === id.toString());

export const deleteBook = (id) => {
  const index = BOOKS_DATA.findIndex((b) => b.id.toString() === id.toString());
  if (index > -1) BOOKS_DATA.splice(index, 1);
};

export const updateBook = (id, title, author) => {
  if (getBook(id)) {
    deleteBook(id);
    const book = { id, title, author };
    BOOKS_DATA.push(book);
    return book;
  }
  return null;
};

export default BOOKS_DATA;
