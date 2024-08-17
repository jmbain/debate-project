import Topic from "./Topic"

import { useOutletContext } from "react-router-dom";

function DetailedTopicList() {
    
    const {topics} = useOutletContext()
    
    const detailedTopicComponents = topics.map(topic => {
        return <Topic key={topic.id} topic={topic} />
    })
    
    return (
        <div>
                    <h4>Here is the ContentList component that displays relevant TopicContent details and a more targeted ContentSearch </h4>
                    <ol className="detailed-topic-list">{detailedTopicComponents}</ol>
        </div>


    )
}

export default DetailedTopicList;