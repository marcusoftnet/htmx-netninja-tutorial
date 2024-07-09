const createBookTemplate = (book) => /*html*/`
  <li data-id="${book.id}">
    <div className="details">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
    </div>
    <button
      hx-delete="/books/${book.id}"
      hx-swap="outerHTML"
      hx-target="closest li">
        Delete
    </button>
  </li>
`;

export default createBookTemplate;