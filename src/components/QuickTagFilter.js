import { useOutletContext } from "react-router-dom";

function QuickTagFilter() {
    
    const{quickFilterTags, selectedQTag, setSelectedQTag} = useOutletContext()
    console.log(quickFilterTags)

    const quickFilterButtonElements = quickFilterTags.map(tag => {
        return <button
                    key={tag}
                    className={selectedQTag===tag? "selected" : ""}
                    onClick={handleClick}
                    value={tag}>
                        {tag}
                </button>
    })

    function handleClick(event){
        console.log(event.target.value)
    }

    return (
        <div className="qTags">
            {quickFilterButtonElements}
        </div>
        
    )
}

export default QuickTagFilter;