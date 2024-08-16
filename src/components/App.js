import logo from '../logo.svg';
import '../App.css';
import {useEffect, useState} from 'react'
import Header from "./Header"
import NavBar from "./NavBar"
import QuickSearch from "./QuickSearch"
import TopicList from "./TopicList"


function App() {
  
  const [topics,setTopics] = useState([])

  useEffect(() => {
    fetch("http://localhost:4020/topics")
    .then(r => r.json())
    .then(topicsData => setTopics(topicsData))
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <NavBar/>
        <QuickSearch/>
        <TopicList/>
      </header>
    </div>
  );
}

export default App;
