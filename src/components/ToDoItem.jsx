import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDoItem(props) {
  return (
    <div className="contentBox">
      <li className="listItem">{props.text}</li>
      <div className="deleteIcon">
        <FontAwesomeIcon icon={faTrash} onClick={() => {
        props.onChecked(props.id);
      }} />
      </div>
    </div>
  );
}

export default ToDoItem;
