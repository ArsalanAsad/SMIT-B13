//import { useState } from 'react'
import React, { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// function Welcome (props) {
//   return <h1>Hello, {props.name}</h1>
// }

// function App () {
//   return (
//     <div>
//       <Welcome name="Alice" />
//       <Welcome name="Bob" />
//     </div>
//   );
// }

// function App () {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() =>setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   )
// }

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   // Run this code once when the component mounts
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     // Cleanup function to clear interval when component unmounts
//     return () => clearInterval(interval);
//   }, []); // empty dependency array = run once

//   return <h2>Timer: {seconds}s</h2>;
// }

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage when component mounts
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('todos'));
    if (stored) setTodos(stored);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  };

  const handleRemove = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo} <button onClick={() => handleRemove(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;


//export default App