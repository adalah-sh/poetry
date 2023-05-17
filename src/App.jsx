import './App.css'
import AllPoetry from './components/allPoetry';
import Card from './components/poteryCard'
import  NavBar  from './components/navbar';
import Poetry from './components/poetry';
import { fetch } from './fetch';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch().then((data) => {
      console.log("dataF", data["data"]);
      setData(data["data"]);
    });
  }, []);

  return (
    <>
      <AllPoetry data={data} />
      {/* <NavBar />
      <Poetry data={data[5]} /> */}
    </>
  );
};

export default App;
