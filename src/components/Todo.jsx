import { useState } from "react";

function Todo({
  updated,
  handleUpdate,
  handleClick,
  id,
  content,
  setTodos,
  todos,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  return (
    <div>
      {isUpdating ? (
        <>
          <input
            type="text"
            value={updated}
            onChange={(e) => {
              handleUpdate(e);
            }}
          />
          <button
            onClick={() => {
              setIsUpdating(false);
              let copyTodos = [...todos];
              copyTodos[id].content = updated;
              setTodos(copyTodos);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>{content}</span>
          <button
            onClick={() => {
              setIsUpdating(true);
              handleClick(id);
            }}
          >
            Update
          </button>
        </>
      )}
    </div>
  );
}
export default Todo;
