import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import DateTime from "./Date";
import Footer from "./footer"

const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  console.log(list);

  if (list) {
      return JSON.parse(localStorage.getItem('lists'));
  } else {
      return [];
  }
}


function App() {
  const [items, setItems] = useState(getLocalItems());

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // add data to local storage
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items))
 }, [items]);

  return (
    <div>
      <DateTime />
      <div className="container">
        <div className="heading">
          <h1>ToDo List</h1>
        </div>
        <InputArea callAddItem={addItem} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
