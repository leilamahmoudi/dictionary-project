import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handelDictionResponse(response) {
    setResults(response.data[0]);
  }
  function handelPexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation : https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handelDictionResponse);

    let pexelsApiKey =
      "563492ad6f917000010000012aa5a8758dc34b0997ac0027706c8c86";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handelPexelsResponse);
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
          <div className="section">
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
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
