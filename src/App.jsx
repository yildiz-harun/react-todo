import { useState } from "react";
import Input from "./components/Input";
import Todo from "./components/Todo";
function App() {
  const [todos, setTodos] = useState([
    { id: 0, content: "content1" },
    { id: 1, content: "content2" },
  ]);
  return (
    <>
      <Input />
      {todos.map((todo) => {
        return <Todo id={todo.id} content={todo.content} />;
      })}
    </>
  );
}
export default App;
