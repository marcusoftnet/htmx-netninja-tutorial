const createEditFormTemplate = (book) => /*html*/ `
  <form
    hx-put="/books/${book.id}"
    hx-target="closest li"
  >
    <input
      type="text"
      name="title"
      value="${book.title}"
      required
      />
      <input
      type="text"
      name="author"
      value="${book.author}"
      required
    />
    <button>Update book</button>
  </form>
  `;

export default createEditFormTemplate;
