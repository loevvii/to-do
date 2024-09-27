import './components/style.css';
import React, { useState } from 'react';
import ToDoList from './components/todolist.js'; 

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  //adds a new item to the list
  const addToDo = () => {
    if (newToDo.trim()) { //checks if input task is empty
      setToDos([...toDos, {text: newToDo, isComplete: false}]); 
      setNewToDo("");
    }
    else {
      alert("Please input a task"); 
    }
  }

  //Updates the selected item
  const updateToDo = (toDoEdit, taskIndex) => {
    const updatedToDos = [...toDos];
    updatedToDos[taskIndex].text = toDoEdit; 
    setToDos(updatedToDos); 
  };

  // Function to remove a to-do based on its index
  const removeToDo = (taskIndex) => {
    const updatedToDos = toDos.filter((_, index) => index !== taskIndex);
    setToDos(updatedToDos);  
  };


  return (

    <div className="app">

      <div className="toDo-input"> {/*Task list*/}
        <div className="toDo-input-content">
          <h1 className="toDo-title">To Do:</h1>
          <input
            type="text"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
            placeholder="Enter a new to do"
          />
          <button onClick={addToDo}>Add</button>
        </div>
      </div>

      <div className="toDo-list"> {/*Task input*/}
        <h1>To Do:</h1>
        {toDos.length === 0 ? (
          <p>No to-dos available!</p>
        ) : (
          <ul>
            {toDos.map((toDo, taskIndex) => (
              <ToDoList
                key={taskIndex} 
                text={toDo.text} 
                updateToDo={(toDoEdit) => updateToDo(toDoEdit, taskIndex)}  
                removeToDo={() => removeToDo(taskIndex)} 
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;