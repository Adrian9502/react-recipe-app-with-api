import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

// component for search input
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // after form submitted, it will redirect to searched/(user input value)

    navigate("/searched/" + input);
  };

  return (
    <div className="p-2">
      <form
        onSubmit={submitHandler}
        className="d-flex align-items-center gap-2"
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search for recipes..."
          aria-label="Search for recipes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-describedby="button-addon2"
        />
        <button className="btn search-btn p-2" type="submit" id="button-addon2">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
