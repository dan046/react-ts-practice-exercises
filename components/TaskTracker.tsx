import { useState } from 'react';
import React = require('react');

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);

  return (
    <div>
      {tasks.map((items, index) => (
        <div key={index}>{items.text}</div>
      ))}
    </div>
  );
}
