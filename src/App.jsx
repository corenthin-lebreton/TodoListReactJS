import React from "react";
import "./App.css";
import Todolist from "./Components/todolist";

function App() {
  return (
    <div className="App">
      <div className="title-home">
        <h2 className="title">Bienvenue sur l'application TodoList</h2>
      </div>

      <div className="container">
        <Todolist />
      </div>
    </div>
  );
}

export default App;
