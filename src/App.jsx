import './App.css'
import AllPoetry from './components/allPoetry';
import  NavBar  from './components/navbar';
import Poetry from './components/poetry';
import { fetch } from './fetch';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch().then((data) => {
      setData(data["data"]);
    });
  }, []);

  return (
    <>
      <NavBar />
      <AllPoetry data={data} />
      {/*<Poetry data={data[5]} /> */}
    </>
  );
};

export default App;
