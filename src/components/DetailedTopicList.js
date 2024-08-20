import Topic from "./Topic"

import { useOutletContext } from "react-router-dom";

function DetailedTopicList() {
    
    const {detailedFilterButtonTopics} = useOutletContext()
    
    const detailedTopicComponents = detailedFilterButtonTopics.map(topic => {
        return <Topic key={topic.id} topic={topic} />
    })
    
    return (
        <div>
                <ol className="detailed-topic-list">{detailedTopicComponents}</ol>
        </div>


    )
}

export default DetailedTopicList;