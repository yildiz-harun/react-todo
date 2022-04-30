import Todo from "./components/Todo";
import Input from "./components/Input";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    { id: 0, content: "sfsdfdasfsda" },
    { id: 1, content: "asfasfasfasASfsaf" },
  ]);
  const [updated, setUpdated] = useState("");
  function handleUpdate(e) {
    setUpdated(e.target.value);
  }
  function handleClick(id) {
    setUpdated(todos[id].content);
  }
  return (
    <div>
      <Input />
      {todos.map((element) => {
        return (
          <Todo
            id={element.id}
            key={element.id}
            content={element.content}
            handleUpdate={handleUpdate}
            updated={updated}
            handleClick={handleClick}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
}

export default App;
