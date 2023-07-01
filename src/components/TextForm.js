import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value); //used for inputs areas
  };

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); //You have clicked on handleUpClick
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearTextClick = () => {
    console.log("Clear text was clicked");
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const strlength = (str) => {
    if (str.length == 0) {
      return 0;
    } else if (str.charAt(str.length - 1) === " ") {
      return text.split(" ").length - 1;
    } else {
      return text.split(" ").length;
    }
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>

        <button
          className="btn btn-danger mr-2"
          onClick={handleClearTextClick}
          style={{ float: "right" }}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary:</h2>
        <p>
          Your text contains <b>{strlength(text)}</b> number of words and{" "}
          <b>{text.length}</b> number of characters
        </p>
      </div>
    </>
  );
}

{
  /* <b>{text.length == 0 ? 0 : text.split(" ").length}</b> */
}
