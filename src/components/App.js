import '../index.css';
import {useEffect, useState} from 'react'
import Header from "./Header"
import NavBar from "./NavBar"
import { Outlet } from 'react-router-dom';
import {QTAGS, DTAGS} from "../Tags"

function App() {
  
  const [topics,setTopics] = useState([])
  const [selectedQTag, setSelectedQTag] = useState("All")
  const [selectedDTag, setSelectedDTag] = useState("All")
  const [quickSearchText, setQuickSearchText] = useState("")

  const quickFilterButtonTopics = topics.filter(topic => {
    if(selectedQTag==="All") {
      return topic
    }
    return topic.qtag===selectedQTag
  })

  const quickFilterSearchTopics = quickFilterButtonTopics.filter(topic => {
    return topic.resolution.toUpperCase().includes(quickSearchText.toUpperCase())
  })

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
      <Outlet context={{
        topics: topics, 
        quickFilterTags: QTAGS, 
        detailedFilterTags: DTAGS, 
        // quickFilterTopics: quickFilterTopics,
        selectedQTag: selectedQTag,
        setSelectedQTag: setSelectedQTag,
        quickSearchText: quickSearchText,
        setQuickSearchText: setQuickSearchText,
        quickFilterSearchTopics: quickFilterSearchTopics
        }} />
    </div>
  );
}

export default App;
