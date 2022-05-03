import { useState } from "react";
import { FiEdit, FiSave, FiTrash2 } from "react-icons/fi";

const Todo = ({ id, content, handleDelete, handleUpdate, handleSave }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [newContent, setNewContent] = useState("");
  return (
    <div className="Todo">
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        <FiTrash2 />
      </button>
      {isUpdate ? (
        <>
          <button
            onClick={() => {
              setIsUpdate(!isUpdate);
              handleSave(id, newContent);
            }}
          >
            <FiSave />
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
            <FiEdit />
          </button>
          <div className="content">{content}</div>
        </>
      )}
    </div>
  );
};

export default Todo;
