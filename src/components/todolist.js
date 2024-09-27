import React, { useState } from 'react';
import './style.css';

function ToDoList({text, updateToDo, removeToDo}) {
    const [isComplete, setIsComplete] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleSave = () => {
      if (editText.trim()) {
        updateToDo(editText);  // Calls the update function in App.js 
        setIsEditing(false);   
      }
    };

    return (
      <li className="toDo-items">

        {isEditing ? (  
          <>
            <input  //edit input prompt
              type="text"
              value={editText} 
              onChange={(e) => setEditText(e.target.value)} 
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <p style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>
              {text}
            </p>   
            <button onClick={() => setIsComplete(!isComplete)} disabled={isEditing}>
              {isComplete ? 'Undo' : 'Complete'}
            </button>

            <button onClick={() => setIsEditing(!isEditing)} disabled={isComplete}>Edit</button>
            <button onClick={removeToDo} disabled={isComplete || isEditing}>Delete</button>
          </>
        )}

      </li>

    );
  }
  
  export default ToDoList;