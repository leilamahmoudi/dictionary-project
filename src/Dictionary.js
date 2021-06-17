import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handelResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //documentation : https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handelResponse);
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }

  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container">
          <h1>What word do you want to look up?</h1>
          <form className="form-inline " onSubmit={handelSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              onChange={handelKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <button className=" search-btn" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
