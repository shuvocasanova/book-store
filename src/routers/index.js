import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import AddBook from "../pages/AddBook";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ShowBooks from "../pages/ShowBooks";
import EditBook from "../pages/EditBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<ShowBooks />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path = "/edit-book" element={<EditBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
