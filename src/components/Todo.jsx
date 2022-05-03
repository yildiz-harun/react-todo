import { useState } from "react";

const Todo = ({ id, content, handleDelete, handleUpdate, handleSave }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [newContent, setNewContent] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        delete
      </button>
      {isUpdate ? (
        <>
          <button
            onClick={() => {
              setIsUpdate(!isUpdate);
              handleSave(id, newContent);
            }}
          >
            save
          </button>
          <input
            type="text"
            value={newContent}
            onChange={(e) => {
              handleUpdate(setNewContent, e.target.value);
              // setNewContent(e.target.value);
            }}
          />
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setIsUpdate(!isUpdate);
              setNewContent(content);
            }}
          >
            update
          </button>
          <span>{content}</span>
        </>
      )}
    </div>
  );
};

export default Todo;
