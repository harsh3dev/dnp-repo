import { useState } from "react";
import "./App.css";
import BlogDetails from "./components/BlogDetails";
import BookDetails from "./components/BookDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [content, setContent] = useState("all");

  const toggleContent = (page) => {
    setContent(page);
  };

  const renderContents = () => {
    switch (content) {
      case "courses":
        return <CourseDetails />;
      case "books":
        return <BookDetails />;
      case "blogs":
        return <BlogDetails />;

      default:
        return (
          <>
            <CourseDetails />
            <div className="column"></div>
            <BookDetails />
            <div className="column"></div>
            <BlogDetails />
          </>
        );
    }
  };

  return (
    <div className="App">
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            toggleContent("courses");
          }}
        >
          Course Details
        </button>
        <button
          className="btn"
          onClick={() => {
            toggleContent("books");
          }}
        >
          Book Details
        </button>
        <button
          className="btn"
          onClick={() => {
            toggleContent("blogs");
          }}
        >
          Blog Details
        </button>
        <button
          className="btn"
          onClick={() => {
            toggleContent("all");
          }}
        >
          Show All
        </button>
      </div>
      <hr />
      <div className="content-container">{renderContents()}</div>
    </div>
  );
}

export default App;
