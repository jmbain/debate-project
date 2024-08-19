import DetailedSearch from "./DetailedSearch";
import DetailedTagFilter from "./DetailedTagFilter";
import DetailedTopicList from "./DetailedTopicList";

function DetailedSearchPage() {
    return (
        <div className="detailedsearchpage">
            <DetailedTagFilter/>
            <DetailedSearch/>
            <DetailedTopicList/>
        </div>
    )
}

export default DetailedSearchPage;