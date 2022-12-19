import React, { useReducer, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './csspage/Shopping.css';

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case "remove":
        // keep every item except the one we want to remove
        return state.filter((_, index) => index !== action.index);
      case "clear":
        return [];
      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <>
    <h2> Shopping List</h2>
    <h3>Please type the name of the ingredients you wish to add to the shopping list</h3>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
    </>
  );
}
export default ShoppingList;