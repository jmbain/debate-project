import '../index.css';
import {useEffect, useState} from 'react'
import Header from "./Header"
import NavBar from "./NavBar"
import { Outlet } from 'react-router-dom';
import {QTAGS, DTAGS} from "../Tags"

function App() {
  
  const [topics,setTopics] = useState([])
  const [funTopics, setFunTopics] =useState([])
  const [selectedQTag, setSelectedQTag] = useState("All")
  const [quickSearchText, setQuickSearchText] = useState("")
  const [selectedDTag, setSelectedDTag] = useState("All")
  const [detailedSearchText, setDetailedSearchText] = useState("")

  const quickFilterButtonTopics = topics.filter(topic => {
    if(selectedQTag==="All") {
      return topic
    }
    return topic.qtag===selectedQTag
  })

  const quickFilterSearchTopics = quickFilterButtonTopics.filter(topic => {
    return topic.resolution.toUpperCase().includes(quickSearchText.toUpperCase())
  })

  const detailedFilterButtonTopics = topics.filter(topic => {
    if(selectedDTag==="All") {
      return topic
    }
    return topic.dtag1===selectedDTag || topic.dtag2===selectedDTag
  })


  //__________NOTE DETAILED FILTER CURRENTLY ONLY LOOKS AT PROCONTENTION1_____________
  const detailedFilterSearchTopics = detailedFilterButtonTopics.filter(topic => {
    return topic.procontention1.toUpperCase().includes(detailedSearchText.toUpperCase())
  })

  // const detailedFilterSearchTopics = quickFilterButtonTopics.filter(topic => {
  //   return topic.resolution.toUpperCase().includes(quickSearchText.toUpperCase())
  // })

  useEffect(() => {
    fetch("http://localhost:4020/topics")
    .then(r => r.json())
    .then(topicsData => setTopics(topicsData))
  },[])
  
  function addFunTopic(newFunTopic) {
    fetch("http://localhost:4020/funTopics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
       },
       body: JSON.stringify({...newFunTopic})
    })
    .then(r => r.json())
    .then(newFunTopic => setFunTopics([...funTopics,newFunTopic]))
  }
  
  function updateTopic(id, topicDataForUpdate) {
    fetch(`http://localhost:4020/topics${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(topicDataForUpdate)
    }
    .then(r => r.json())
    .then(updatedTopic => setTopics(topics => topics.map(topic => {
      if(updatedTopic.id===topic.id) {
        return updatedTopic
      }
      else{
        return topic
      }
    })))

    )
  }

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
        quickFilterSearchTopics: quickFilterSearchTopics,
        updateTopic: updateTopic,
        selectedDTag: selectedDTag,
        setSelectedDTag, setSelectedDTag,
        detailedFilterButtonTopics: detailedFilterButtonTopics,
        detailedSearchText: detailedSearchText,
        setDetailedSearchText: setDetailedSearchText,
        detailedFilterSearchTopics: detailedFilterSearchTopics,

        }} />
    </div>
  );
}

export default App;
