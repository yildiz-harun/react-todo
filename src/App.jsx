import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <form>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      <Todo />
    </div>
  );
}

export default App;
