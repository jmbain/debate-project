import { useOutletContext } from "react-router-dom";
import NewTopicForm from "./NewTopicForm";

function Home() {
    
    const {topics, funTopics} = useOutletContext()
    // console.log(topics)
    // console.log((topics.length)-1)
    // console.log(topics[182].resolution)
    
    let mostRecentTopicIndex = topics.length-1
    const currentTopic = topics[mostRecentTopicIndex]

    console.log(funTopics)
    let mostRecentFunTopicIndex = funTopics.length-1
    const currentFunTopic = funTopics[mostRecentFunTopicIndex]
    console.log(mostRecentFunTopicIndex)
    console.log(currentFunTopic)

    
    if(currentTopic!==undefined && currentFunTopic!==undefined) {
        return (
            <div className="home">
                <h2 className="header">The current/most recent competitive topic from {currentTopic.month}, {currentTopic.year} is...</h2>
                <h3 className="topicResolution">{currentTopic.resolution}</h3>
                
                <h2 className="header">Your most recent fun topic was... </h2>
                <h3 className="topicResolution">{currentFunTopic.resolution}</h3>
            </div>
            

        )}
}

export default Home;