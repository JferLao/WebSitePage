import {useEffect} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  const getData = async ()=>{
      const res =await axios({
        method: 'get',
        url: 'http://localhost:8080/api/getNum',
      });
      console.log(res.data,'..res')
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
