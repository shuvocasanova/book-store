import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <br />
      <br />
      <Link to="/show-books">
        <strong>
          <a>Click on Show Books</a>
        </strong>
      </Link>
    </div>
  );
};

export default Home;
