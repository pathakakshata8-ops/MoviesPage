import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const append = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => setInput("");
  const deleteLast = () => setInput((prev) => prev.slice(0, -1));

  const calculate = () => {
    try {
      const result = Function("return " + input)();
      setHistory((prev) => [...prev, `${input} = ${result}`]);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const square = () => {
    try {
      const result = Math.pow(Number(input), 2);
      setHistory((prev) => [...prev, `${input}² = ${result}`]);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const sqrt = () => {
    try {
      const result = Math.sqrt(Number(input));
      setHistory((prev) => [...prev, `√${input} = ${result}`]);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const percentage = () => {
    try {
      const result = Number(input) / 100;
      setHistory((prev) => [...prev, `${input}% = ${result}`]);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  // Keyboard Support
  useEffect(() => {
    const handleKey = (e) => {
      if ("0123456789+-*/.".includes(e.key)) {
        append(e.key);
      } else if (e.key === "Enter") {
        calculate();
      } else if (e.key === "Backspace") {
        deleteLast();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{input || "0"}</div>

        <div className="buttons">
          <button onClick={clear}>C</button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={percentage}>%</button>
          <button onClick={() => append("/")}>÷</button>

          <button onClick={() => append("7")}>7</button>
          <button onClick={() => append("8")}>8</button>
          <button onClick={() => append("9")}>9</button>
          <button onClick={() => append("*")}>×</button>

          <button onClick={() => append("4")}>4</button>
          <button onClick={() => append("5")}>5</button>
          <button onClick={() => append("6")}>6</button>
          <button onClick={() => append("-")}>−</button>

          <button onClick={() => append("1")}>1</button>
          <button onClick={() => append("2")}>2</button>
          <button onClick={() => append("3")}>3</button>
          <button onClick={() => append("+")}>+</button>

          <button onClick={square}>x²</button>
          <button onClick={sqrt}>√</button>
          <button onClick={() => append("0")}>0</button>
          <button className="equal" onClick={calculate}>=</button>
        </div>
      </div>

      <div className="history">
        <h3>History</h3>
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
