import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searchin for ${keyword} `);
  }
  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="form-inline my-2 my-lg-0" onSubmit={search}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          onChange={handelKeywordChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
