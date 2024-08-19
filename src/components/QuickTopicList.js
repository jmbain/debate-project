import Topic from "./Topic"

import { useOutletContext } from "react-router-dom";

function QuickTopicList() {
    
    const {quickFilterSearchTopics} = useOutletContext()
    
    const quickTopicComponents = quickFilterSearchTopics.map(topic => {
        return <Topic key={topic.id} topic={topic} />
    })
    
    return (
        <div>
             <h5>Here is the Topic List Component that presents a list of Topics that is filterable both by Quick Search and Quick Filter buttons</h5>
             <ol className="quick-topic-list">{quickTopicComponents}</ol>
        </div>
       
    )
}

export default QuickTopicList;