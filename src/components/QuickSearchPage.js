import QuickSearch from "./QuickSearch";
import QuickTagFilter from "./QuickTagFilter";
import QuickTopicList from "./QuickTopicList";


function QuickSearchPage() {
    return (
        <div className="quicksearchpage">
            <QuickTagFilter/>
            <QuickSearch/>
            <QuickTopicList/>
        </div>
        
    )
}

export default QuickSearchPage;