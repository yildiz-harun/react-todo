import { useState } from "react";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDelete(id) {
    todos.map((todo, index) => {
      if (todo.id === id) {
        setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
      }
    });
  }

  function handleUpdate(setNewContent, value) {
    setNewContent(value);
  }

  function handleSave(id, content) {
    todos.map((todo, index) => {
      if (todo.id === id) {
        //!doesn't work let todosCopy = [...todos];
        let todosCopy = [...todos];
        todosCopy[index].content = content;
        setTodos(todosCopy);
        alert(todosCopy[index].content);
      }
    });
  }

  return (
    <>
      <Input handleSubmit={handleSubmit} />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            content={todo.content}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleSave={handleSave}
          />
        );
      })}
    </>
  );
}
export default App;
