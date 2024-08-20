import Topic from "./Topic"

import { useOutletContext } from "react-router-dom";

function DetailedTopicList() {
    
    const {detailedFilterSearchTopics} = useOutletContext()
    
    const detailedTopicComponents = detailedFilterSearchTopics.map(topic => {
        return <Topic key={topic.id} topic={topic} />
    })
    
    return (
        <div>
                <ol className="detailed-topic-list">{detailedTopicComponents}</ol>
        </div>


    )
}

export default DetailedTopicList;