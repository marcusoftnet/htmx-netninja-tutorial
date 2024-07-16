import createBookTemplate from './book.js';
import BOOKS_DATA from '../data/data.js';

const createListTemplate = (books) => /*html*/`
  <ul>
    ${books.map(createBookTemplate).join('')}
  </ul>
`;

export default createListTemplate;