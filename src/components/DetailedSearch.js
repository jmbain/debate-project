import { useOutletContext } from "react-router-dom";

function DetailedSearch() {
    
    const {detailedSearchText, setDetailedSearchText} = useOutletContext()
    
    function handleChange(event) {
        setDetailedSearchText(event.target.value)
    }
    
    return (
        <div className="detailedSearchBar">
        <label htmlFor="detailedSearch" className="detailedSearchLabel">Detailed Topic Search</label>
        <input
            type="text"
            id="detailedSearch"
            placehoder="Start typing content to search..."
            value={detailedSearchText}
            onChange={handleChange}
        />
    </div>
    )
}

export default DetailedSearch;