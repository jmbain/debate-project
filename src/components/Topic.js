import { Link } from "react-router-dom";

function Topic({topic}) {
    
    
    return (
        <li className="topic">
            <Link to={`topicdetail/${topic.id}`} replace>{topic.resolution}</Link>
        </li>
    )
}

export default Topic;