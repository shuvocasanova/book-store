const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");
const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      year: "1997",
    },
    {
      id: uuidv4(),
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      year: "1998",
    },
    {
      id: uuidv4(),
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J.K. Rowling",
      year: "1999",
    },
    {
      id: uuidv4(),
      title: "Harry Potter and the Goblet of Fire",
      author: "J.K. Rowling",
      year: "2000",
    },
    {
      id: uuidv4(),
      title: "Harry Potter and the Order of the Phoenix",
      author: "J.K. Rowling",
      year: "2003",
    },
    {
      id: uuidv4(),
      title: "Harry Potter and the Half-Blood Prince",
      author: "J.K. Rowling",
      year: "2005",
    },
    {
      id: uuidv4(),
      title: "Harry Potter and the Deathly Hallows",
      author: "J.K. Rowling",
      year: "2007",
    },
    {
      id: uuidv4(),
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: "1937",
    },
    {
      id: uuidv4(),
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      year: "1954",
    },
  ],
};
export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author, year } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        // state.books = state.books.map((book) =>
        //   book.id === id ? { ...book, title, author, year } : book
        // );
        isBookExist[0].title = title;
        isBookExist[0].author = author;
        isBookExist[0].year = year;
      }
    },
  },
});

export default booksSlice.reducer;
export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
