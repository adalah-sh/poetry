import './App.css'
import AllPoetry from './components/allPoetry';
import NavBar from './components/navbar';
import Poetry from './components/poetry';
import { fetch } from './fetch';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [one, setOne] = useState(false);

  useEffect(() => {
    fetch().then((data) => {
      setData(data["data"]);
    });
  }, []);

  return (
    <>
      <NavBar />
      {!one && <AllPoetry setOne={setOne} data={data} />}
      {one && <Poetry data={data[one]} />}
    </>
  );
};



export default App;
