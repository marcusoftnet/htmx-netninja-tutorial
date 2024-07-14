import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListBooksTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import createEditFormTemplate from './views/edit.js';
import {addBook,getBook, deleteBook} from './data/data.js'


// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

// /books/
app.get('/books', (req, res) => {
  res.send(createListBooksTemplate());
});

app.post('/books', (req, res) => {
  const book = addBook(req.body.title, req.body.author);
  res.redirect(`/books/${book.id}`);
});

// /books/:id
app.get('/books/:id', (req, res) => {
  const book = getBook(req.params.id);
  res.send(createBookTemplate(book))
});

app.delete('/books/:id', (req, res) => {
  deleteBook(req.params.id)
  res.send("");
});

// /books/:id/edit
app.get('/books/:id/edit', (req, res) => {
  const book = getBook(req.params.id);
  res.send(createEditFormTemplate(book))
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});