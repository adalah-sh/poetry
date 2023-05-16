
import './App.css'

import { useState, useEffect } from "react";
import { createServer } from "miragejs";
import { data } from "./data";
import AllPoetry from './components/allPoetry';
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
      <AllPoetry />
    </ul>
  );
};

export default App;
