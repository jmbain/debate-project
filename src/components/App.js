import '../index.css';
import {useEffect, useState} from 'react'
import Header from "./Header"
import NavBar from "./NavBar"
import { Outlet } from 'react-router-dom';
import {QTAGS, DTAGS} from "../Tags"

function App() {
  
  const [topics,setTopics] = useState([])
  const [selectedQTag, setSelectedQTag] = useState("All")

  useEffect(() => {
    fetch("http://localhost:4020/topics")
    .then(r => r.json())
    .then(topicsData => setTopics(topicsData))
  },[])
  
  // console.log(topics)

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Outlet context={{topics: topics, quickFilterTags: QTAGS, detailedFilterTags: DTAGS}} />
    </div>
  );
}

export default App;
