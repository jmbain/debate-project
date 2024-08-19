import Topic from "./Topic"

import { useOutletContext } from "react-router-dom";

function DetailedTopicList() {
    
    const {topics} = useOutletContext()
    
    const detailedTopicComponents = topics.map(topic => {
        return <Topic key={topic.id} topic={topic} />
    })
    
    return (
        <div>
                <ol className="detailed-topic-list">{detailedTopicComponents}</ol>
        </div>


    )
}

export default DetailedTopicList;