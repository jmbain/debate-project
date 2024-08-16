import QuickSearch from "./QuickSearch";
import QuickTagFilter from "./QuickTagFilter";
import QuickTopicList from "./QuickTopicList";


function QuickSearchPage() {
    return (
        <div>
            <h3>Here is the Topic List Component that presents a list of Topics that is filterable both by Quick Search and Quick Filter buttons</h3>
            <QuickTagFilter/>
            <QuickSearch/>
            <QuickTopicList/>
        </div>
        
    )
}

export default QuickSearchPage;