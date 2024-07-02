import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <div>Todo Editor</div>
      <div>Todo List</div>
    </div>
  );
}

export default App;
