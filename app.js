import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListBooksTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import BOOKS_DATA from './data/data.js'
import {createNewBook} from './data/data.js'


// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.post('/books', (req, res) => {
  const book = createNewBook(req.body.title, req.body.author);
  console.log(book)
  BOOKS_DATA.push(book)
  res.send(createBookTemplate(book));
});

app.get('/books', (req, res) => {
  res.send(createListBooksTemplate(BOOKS_DATA));
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});