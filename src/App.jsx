import React, { useState } from "react";
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "white" },
        }}
        
      />
      <Button
        variant="contained"
        fullWidth
        onClick={addTask}
        className="todo-button"
      >
        Add Task
      </Button>
      <List className="todo-list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => toggleComplete(index)}
              className="todo-checkbox"
            />
            <ListItemText primary={task.text} />
            <IconButton edge="end" onClick={() => deleteTask(index)}>
              <DeleteIcon className="delete-icon" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default App;
