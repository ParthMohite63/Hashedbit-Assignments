import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [result, setResult] = useState("");

  const navigate = useNavigate(); // ✅ for page navigation

  return (
    <div>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="First number"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Second number"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setResult(Number(n1) + Number(n2))}>Add</button>
      <button onClick={() => setResult(Number(n1) - Number(n2))}>Sub</button>
      <button onClick={() => setResult(Number(n1) * Number(n2))}>Mul</button>
      <button onClick={() => setResult(Number(n1) / Number(n2))}>Div</button>

      <h3>Result: {result}</h3>

      <hr />

      {/* ✅ Button to Open Todo Page */}
      <button onClick={() => navigate("/todo")}>
        Go To Todo App
      </button>
    </div>
  );
}

export default Calculator;
