import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} spellcheck="false" placeholder="Add Work..."/>
      
      <button onClick={() => {
          props.callAddItem(inputText);
          setInputText("");
        }}>
         <span><FontAwesomeIcon icon={faPlus} /></span>
      </button>
      
    </div>
  );
}

export default InputArea;
