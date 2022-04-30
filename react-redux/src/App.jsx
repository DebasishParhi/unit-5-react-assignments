import { Todo } from "./components/Todo";
import { Route, Routes } from "react-router-dom";
import {TodoDetails} from './components/TodoDetails'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo></Todo>}></Route>
        <Route path="/todos/:id" element={<TodoDetails></TodoDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;