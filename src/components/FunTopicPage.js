// import FunTopicList from "./FunTopicList";
import FunTopicList from "./FunTopicList";
import NewTopicForm from "./NewTopicForm";

function FunTopicHomePage() {
    return (
        <div className="funtopicpage">
            <NewTopicForm/>
            <FunTopicList/>
        </div>
    )
}

export default FunTopicHomePage;