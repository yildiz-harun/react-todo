import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = ({ handleSubmit }) => {
  const [newContent, setNewContent] = useState("");
  return (
    <form className="item">
      <input
        type="text"
        value={newContent}
        onChange={(e) => {
          setNewContent(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const newTodo = { id: uuidv4(), content: newContent };
          handleSubmit(newTodo);
        }}
      >
        add
      </button>
    </form>
  );
};

export default Input;
