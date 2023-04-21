import { useState } from 'react';
import React = require('react');
import Button from '../ToDoList/Button';

export default function ToDo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Do laundry', completed: true },
    { id: 3, text: 'Clean room', completed: false },
  ]);
  const [deleteTask, setDeleteTask] = useState('');
  const [newTodo, setNewTodo] = useState('');

  const map = todos.map((items, index) => (
    <div key={index} className="todo__list">
      <ul>
        <li>
          <input type="checkbox" />
          {items.text}
        </li>
      </ul>
      <Button data="x" />
    </div>
  ));

  const listHandler = (e: any) => {
    setTodos(e.target.value);
  };

  return (
    <div>
      <h3>Exercise 2: useState ToDoList</h3>
      <p>
        Create a todo app using useState. The app should have an input field for
        adding new tasks, a button to add the task, and a list to display the
        tasks. Each task in the list should have a checkbox to mark it as
        completed, and a delete button to remove it from the list.
      </p>
      <section className="input-field__container">
        <label htmlFor="inputAddTask">Task</label>
        <input className="inputAddTask" type="text" name="" id="" />
        <Button data="Add Task" />
      </section>
      <section className="todo__container">{map}</section>
    </div>
  );
}
