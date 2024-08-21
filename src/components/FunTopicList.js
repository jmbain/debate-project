import FunTopic from "./FunTopic";

import { useOutletContext } from "react-router-dom";

function FunTopicList() {
    
    const {funTopics} = useOutletContext()
    
    // console.log(funTopics)

    const funTopicComponents = funTopics.map(topic => {
        if(topic!==null) {
            return <FunTopic key={topic.id} topic={topic} />
        }
        
    })
    
    return (
        <div>
             <h2 className="header">Previous Fun Topics!</h2>
             <ol className="fun-topic-list">{funTopicComponents}</ol>
        </div>
       
    )
}

export default FunTopicList;