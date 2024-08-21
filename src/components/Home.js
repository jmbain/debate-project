import { useOutletContext } from "react-router-dom";
import NewTopicForm from "./NewTopicForm";

function Home() {
    
    const {topics} = useOutletContext()
    // console.log(topics)
    // console.log((topics.length)-1)
    // console.log(topics[182].resolution)
    
    let mostRecentTopicIndex = topics.length-1
    const currentTopic = topics[mostRecentTopicIndex]
    // console.log(currentTopic)

    
    if(currentTopic!==undefined) {
        return (
            <div className="home">
                <h2 className="header">Your most recently researched topic is...</h2>
                <h3 className="topicResolution">{currentTopic.resolution}</h3>
                <h3>This topic is from {currentTopic.month}, {currentTopic.year}</h3>
                <NewTopicForm/>
            </div>
            

        )}
}

export default Home;