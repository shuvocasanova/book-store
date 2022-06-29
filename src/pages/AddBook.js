import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../app/booksSlice/booksSlice";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  //handleTitle
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  //handleAuthor
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  //handleYear
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: uuidv4(), title, author, year }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitle}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Auth:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={handleAuthor}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            min={1800}
            max={2022}
            id="year"
            name="year"
            value={year}
            onChange={handleYear}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
