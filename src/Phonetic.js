import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      {/* <a href={props.phonetic.audio} target="-blank">
        Listen
      </a> */}
      <span className="text-phonetic">{props.phonetic.text}</span>
      <audio controls className="audio-controls">
        <source src={props.phonetic.audio} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
