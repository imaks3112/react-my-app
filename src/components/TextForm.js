import React, { useState } from "react";

export default function TextForm(props) {
  const textAreaChange = (event) => {
    setText(event.target.value);
  };

  const clickForUppercase = () => {
    setText(text.toUpperCase());
    props.alert('Converted to uppercase !', 'success');
  };
  
  const clickForLowercase = () => {
    setText(text.toLowerCase());
    props.alert('Converted to lowercase !', 'success');
  }

  const clickForTitlecase = () => {
    setText(text.toLowerCase().split(' ').map(function (word) {
      return word.charAt(0).toUpperCase().concat(word.substr(1));
    }).join(' '))
    props.alert('Converted to titlecase !', 'success');
  }

  const clickForClear = () => {
    setText('');
    props.alert('Please enter something to show', 'warning');
  }

  const [text, setText] = useState('Hi I am Akshay here. I am a Software Engineer.');

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white': '#083456'}}>
      <div className="mb-3">
        <label htmlFor="textValue" className="form-label">
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white': 'gray', color: props.mode === 'dark' ? 'white': '#083456'}}
          value={text}
          onChange={textAreaChange}
          id="textValue"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={clickForUppercase}>Click for Uppercase!</button>
      <button className="btn btn-secondary mx-1" onClick={clickForLowercase}>Click for Lowercase!</button>
      <button className="btn btn-info mx-1" onClick={clickForTitlecase}> Click for Titlecase!</button>
      <button className="btn btn-warning" onClick={clickForClear}> Clear </button>
    </div>
    <div className="container my-3">
      <div className="card" style={{backgroundColor: props.mode === 'light' ? 'white': 'gray', color: props.mode === 'dark' ? 'white': '#083456'}}>
        <div className="card-header">
          <h1>Your Text summary</h1>
        </div>
        <div className="card-body">
          <p>{text.split(" ").length-1} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes for read</p>
        </div>
      </div>

      <div className="card my-2" style={{backgroundColor: props.mode === 'light' ? 'white': 'gray', color: props.mode === 'dark' ? 'white': '#083456'}}>
        <div className="card-header">
          <h2>Preview</h2>
        </div>
        <div className="card-body">
          <p>{text.length>0 ? text: 'Please enter something to show preview...'}</p>
        </div>
      </div>
    </div>
    </>
  );
}
