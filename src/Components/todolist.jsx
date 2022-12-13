import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./todolistStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
const Todolist = () => {
  const [input, setInput] = useState("");

  const ls = localStorage;

  const getInputContent = () => {
    if (!input) {
      alert("Veuillez saisir une tâche valide");
      return;
    }

    //if input already in localstorage
    if (ls.getItem(input) === input) {
      alert("La tâche existe déjà");
      return;
    }

    //add input to localstorage
    ls.setItem(input, input);

    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        className="input"
        onChange={(e) => setInput(e.target.value)}
        required
      />

      <Button
        variant="primary"
        className="add-button"
        onClick={getInputContent}>
        Add
      </Button>

      <div className="list">
        {Object.keys(ls).map((key) => {
          return (
            <div className="list-item">
              <ListGroup>
                <ListGroup.Item className="listGroupItem">
                  {ls.getItem(key)}
                  <Button
                    variant="secondary"
                    className="delete"
                    onClick={() => {
                      ls.removeItem(key);
                      window.location.reload();
                    }}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
