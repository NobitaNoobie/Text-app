import React from "react";

export default function Alert(props) {

  const capitalize = (word) =>{
    const temp = word;
    return temp.toUpperCase().charAt(0) + temp.slice(1);
  }

  return (
    props.alert && ( //returns true only if no null
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
