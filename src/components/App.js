import '../index.css';
import {useEffect, useState} from 'react'
import Header from "./Header"
import NavBar from "./NavBar"
import { Outlet } from 'react-router-dom';


function App() {
  
  const [topics,setTopics] = useState([])

  useEffect(() => {
    fetch("http://localhost:4020/topics")
    .then(r => r.json())
    .then(topicsData => setTopics(topicsData))
  },[])
  
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default App;
