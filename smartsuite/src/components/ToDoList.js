import React, { useState } from "react";
import TodoItem from "../utils/todolistFutures/todoItem";
import '../styles/Global.css';

export const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctor Appointment", completed: true, priority: false },
    { id: 2, text: "Meeting at School", completed: false, priority: false },
  ]);
  const [text, setText] = useState("");

  // Add a new task
  function addTask(text) {
    if (text.trim() === "") return; // Prevent adding empty tasks
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      priority: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  // Delete a task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle task completion
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Toggle task priority
  function togglePriority(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, priority: !task.priority } : task
      )
    );
  }

  // Edit task text
  function editTask(id, newText) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  }

  // Clear completed tasks
  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed));
  }

  // Count tasks
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="todo-container">
      <h2 style={{textAlign: "center"}}>To-Do List</h2>
      <div className="task-stats">
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed: {completedTasks}</p>
      </div>
      <div className="input-section">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={() => addTask(text)}>Add Task</button>
      </div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
          togglePriority={togglePriority}
          editTask={editTask}
        />
      ))}
      {completedTasks > 0 && (
        <button className="clear-btn" onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </div>
  );
};
