import React, { useState } from "react";
import '../../styles/Global.css';

function TodoItem({ task, deleteTask, toggleCompleted, togglePriority, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  // Handle edit save
  function handleEditSave() {
    editTask(task.id, newText);
    setIsEditing(false);
  }

  return (
    <div className={`todo-item ${task.priority ? 'high-priority' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEditSave}
          onKeyDown={(e) => e.key === 'Enter' && handleEditSave()}
          autoFocus
        />
      ) : (
        <p className={task.completed ? 'completed' : ''}>{task.text}</p>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => togglePriority(task.id)}>
        {task.priority ? "Unmark Priority" : "Mark Priority"}
      </button>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default TodoItem;
