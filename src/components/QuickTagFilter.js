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

    function handleClick(){
        console.log("Clicked!")
    }

    return (
        <div className="qTags">
            <h4>Here is the Quick Search component that filters the Topic List by clicking Domestic or International buttons</h4>
            {quickFilterButtonElements}
        </div>
        
    )
}

export default QuickTagFilter;