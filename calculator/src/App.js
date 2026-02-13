import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./Calculator";
import TodoApp from "./TodoApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
