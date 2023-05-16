// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
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

// export default App

import { useState, useEffect } from "react";
import { createServer } from "miragejs";
import { data } from "./data";

let server = createServer();
server.get("/azouha", data);

const App = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/azouha")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users);
      });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h2>{user.title}</h2>
          {user.poetry.split("@").map((e, i) => (
              <p key={i}>{e}</p>
          ))}
          <br />
          <br />
        </li>
      ))}
    </ul>
  );
};

export default App;
