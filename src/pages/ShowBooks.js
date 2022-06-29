import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showBooks, deleteBook } from "../app/booksSlice/booksSlice";

const ShowBooks = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  //handleDelete
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  useEffect(() => {
    dispatch(showBooks());
  }, []);

  return (
    <div>
      <h2>List of Books</h2>
      {books ? 
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book, index) => {
              const { id, title, author, year } = book;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>{year}</td>
                  <td>
                    <Link to="/edit-book" state={{id,title,author,year}}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
       : 
        <div className="loading">Loading...</div>
      }
    </div>
  );
};

export default ShowBooks;
