const BOOKS_DATA = [
  {id: 1, title: 'The Final Empire', author: 'Brandon Sanderson'},
  {id: 2, title: 'The Way of Kings', author: 'Brandon Sanderson'},
];

export const getNextId = () => Math.max(...BOOKS_DATA.map(b => +b.id)) + 1

export const createNewBook = (title, author) => {
  return {
    id: getNextId(),
    title: title,
    author: author,
  }
}

export default BOOKS_DATA;