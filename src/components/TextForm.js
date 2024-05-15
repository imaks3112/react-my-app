import React, { useState } from "react";

export default function TextForm(props) {
  const textAreaChange = (event) => {
    setText(event.target.value);
  };

  const clickForUppercase = () => {
    setText(text.toUpperCase());
  };
  
  const clickForLowercase = () => {
    setText(text.toLowerCase());
  }

  const clickForTitlecase = () => {
    setText(text.toLowerCase().split(' ').map(function (word) {
      return word.charAt(0).toUpperCase().concat(word.substr(1));
    }).join(' '))
  }

  const [text, setText] = useState('Hi I am Akshay here. I am a Software Engineer.');

  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="textValue" className="form-label">
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={textAreaChange}
          id="textValue"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={clickForUppercase}>Click for Uppercase!</button>
      <button className="btn btn-secondary mx-1" onClick={clickForLowercase}>Click for Lowercase!</button>
      <button className="btn btn-info mx-1" onClick={clickForTitlecase}> Click for Titlecase!</button>
    </div>
    <div className="container my-3">
      <div className="card">
        <div className="card-header">
          <h1>Your Text summary</h1>
        </div>
        <div className="card-body">
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes for read</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Preview</h2>
        </div>
        <div className="card-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
    </>
  );
}
