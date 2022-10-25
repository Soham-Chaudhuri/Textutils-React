import React, { useState } from "react";

export default function TextForm() {
  const handleUpClick = () => {
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text");
  return (
    <>
      <div className="form-floating">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          placeholder="Leave a comment here"
          id="floatingTextarea"
          rows="8"
        ></textarea>
      </div>
      <div className="btn btn-primary" onClick={handleUpClick}>
        Convert To Uppercase
      </div>
      <div className="container">
        Your text Summary
        <p>you are a {text} boy </p>
        <p>no of word {text.split(" ").length}</p>
      </div>
    </>
  );
}
