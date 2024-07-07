import createBookTemplate from './book.js'
const createListBooksTemplate = (books) => /*html*/`
  <ul>
    ${books.map(createBookTemplate).join('')}
  </ul>
`;

export default createListBooksTemplate;