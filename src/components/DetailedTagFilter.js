import { useOutletContext } from "react-router-dom";

function DetailedTagFilter() {
    
    const{detailedFilterTags, selectedDTag, setSelectedDTag} = useOutletContext()
    // console.log(detailedFilterTags)

    const detailedFilterButtonElements = detailedFilterTags.map(tag => {
        return <button
                    key={tag}
                    className={selectedDTag===tag? "selected" : ""}
                    onClick={handleClick}
                    value={tag}>
                        {tag}
                </button>
})

    function handleClick(event){
        setSelectedDTag(event.target.value)
    }

    return (
        <div className="dTags">
            {detailedFilterButtonElements}
        </div>

    )
}

export default DetailedTagFilter;