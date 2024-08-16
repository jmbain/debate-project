import logo from '../logo.svg';
import '../index.css';
import {useEffect, useState} from 'react'
import Header from "./Header"
import NavBar from "./NavBar"
import QuickSearch from "./QuickSearch"
import TopicList from "./QuickTopicList"
import QuickTagFilter from "./QuickTagFilter"


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
    </div>
  );
}

export default App;
