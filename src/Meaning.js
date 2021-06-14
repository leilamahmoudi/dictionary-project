import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.Meaning);

  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              <em className="example">{definition.example}</em>
              <br />
              <strong>synonyms:</strong>

              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
      <p className="definition">{props.meaning.definitions[0].definition}</p>
      <p className="example">{props.meaning.definitions[0].example}</p>
    </div>
  );
}
