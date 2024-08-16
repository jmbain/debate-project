import QuickSearch from "./QuickSearch";
import QuickTagFilter from "./QuickTagFilter";
import QuickTopicList from "./QuickTopicList";


function QuickSearchPage() {
    return (
        <div>
            <h3>Here is the Quick Search Page!</h3>
            <QuickTagFilter/>
            <QuickSearch/>
            <QuickTopicList/>
        </div>
        
    )
}

export default QuickSearchPage;