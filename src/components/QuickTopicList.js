import Topic from "./Topic"

import { useOutletContext } from "react-router-dom";

function QuickTopicList() {
    
    const {quickFilterSearchTopics} = useOutletContext()
    
    const quickTopicComponents = quickFilterSearchTopics.map(topic => {
        
        
        return <Topic key={topic.id} topic={topic} />
    })
    
    return (
        <div>
             <ol className="quick-topic-list">{quickTopicComponents}</ol>
        </div>
       
    )
}

export default QuickTopicList;