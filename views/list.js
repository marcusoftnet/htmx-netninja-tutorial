import createBookTemplate from './book.js';
import BOOKS_DATA from '../data/data.js';

const createListBooksTemplate = () => /*html*/`
  <ul>
    ${BOOKS_DATA.map(createBookTemplate).join('')}
  </ul>
`;

export default createListBooksTemplate;