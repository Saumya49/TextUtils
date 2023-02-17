//import { clear } from '@testing-library/user-event/dist/clear';
//import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    // console.log("UPPercase was clicked"+text);
    let newText = text.toUpperCase();

    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleDnClick = () => {
    let newText = text.toLowerCase();

    setText(newText);
  };

  const handle2Click = () => {
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        {/* <h1>Write some text</h1> */}
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props === "light" ? "grey" : "light" }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-secondary mx-2 my-1" onClick={handleUpClick}>
          convert to uppercase
        </button>

        <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={handleDnClick}>
          
          convert to lowercase
        </button>

        <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={handle2Click}>
          clear text
        </button>
        {/* <button className="btn btn-secondary mx-2 my-2" onClick={handle3Click} >copy</button>*/}
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <hr />
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} numbers of characters{" "}
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter something to preview it here"}</p>
      </div>
    </>
  );
}
