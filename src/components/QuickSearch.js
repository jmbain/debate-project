import { useOutletContext } from "react-router-dom";

function QuickSearch() {
    
    const {quickSearchText, setQuickSearchText} = useOutletContext()
    
    function handleChange(event) {
        setQuickSearchText(event.target.value)
    }

    return (
        <div className="quickSearchBar">
            <label htmlFor="quickSearch">Quick Topic Search</label>
            <input
                type="text"
                id="quickSearch"
                placehoder="Start typing a topic to search..."
                value={quickSearchText}
                onChange={handleChange}
            />
        </div>
    )
}

export default QuickSearch;