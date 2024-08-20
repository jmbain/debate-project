import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function TopicContent() {
    
    const [topic, setTopic] = useState(null)
    // const [newProContentForm, setNewProContentForm] = useState("")
    const [editFormData, setEditFormData] = useState({
        proframework: "",
        procontention1: "",
        procontention2: "",
        procontention3: "",
        conframework: "",
        concontention1: "",
        concontention2: "",
        concontention3: ""
    })

    const {id} = useParams();
    // console.log(useParams())
    // console.log(id)
    
    const {updateTopic} =useOutletContext()
    // console.log(updateTopic)
    
    useEffect(() => {
        fetch(`http://localhost:4020/topics/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then((topicData) => setTopic(topicData))
            }
        })
    },[])

    function handleEditProContSubmit(event) {
        event.preventDefault()

        console.log(event.target.value)
    }

    function handleEditConContSubmit(event) {
        event.preventDefault()

        console.log(event.target.value)
    }

    // console.log(topic)


    // ______________Section below was initial infrastructure relating to adding a contention, however, deprioritized for now___________
    // ______________ equivalent JSX is also commented out below_____________________
    // function handleNewProContSubmit(event) {
    //     event.preventDefault()

    //     console.log(event.target.value)
    // }

    // function handleNewProContChange(event) {
    //     console.log(event.target.value)
    // }

    // function handleNewConContSubmit(event) {
    //     event.preventDefault()

    //     console.log(event.target.value)
    // }

    // function handleNewConContChange(event) {
    //     console.log(event.target.value)
    // }

    if(topic!==null) {
        return (
            <div className="fulltopiccontentcontainer">
                <div className="existingcontentcontainer">
                    <h2 className="topicResolution">{topic.resolution}</h2>
                    <div className="casecontent">
                        <div className="proCase">
                            <h3 className="procaseheader">Pro Case</h3>
                            <h5>{topic.proframework}</h5>
                            <ol className="proContentions">
                                <li className="contention">{topic.procontention1}</li>
                                <li className="contention">{topic.procontention2}</li>
                                <li className="contention">{topic.procontention3}</li>
                            </ol>
                            {/* <form className="addProContention" onSubmit={handleNewProContSubmit}>
                                <input type="text" name="newProContention" placeholder="Add a Pro contention..." onChange={handleNewProContChange}  value={newProContentForm}/>
                            </form> */}
                        </div>
                        <div className="conCase">
                            <h3 className="concaseheader">Con Case</h3>
                            <h5>{topic.conframework}</h5>
                            <ol className="conContentions">
                                <li className="contention">{topic.concontention1}</li>
                                <li className="contention">{topic.concontention2}</li>
                                <li className="contention">{topic.concontention3}</li>
                            </ol>
                            {/* <form className="addConContention" onSubmit={handleNewConContSubmit}>
                                <input type="text" name="newProContention" placeholder="Add a Con contention..." onChange={handleNewConContChange}  value={newProContentForm}/>
                            </form> */}
                        </div>
                    </div>
                </div>
                <div className="editContentContainer">
                    <form className="editProContent" onSubmit={handleEditProContSubmit} >
                        <input className="forminput" type="text" name="proframework" placeholder="Pro Framework"/>
                        <input className="forminput" type="text" name="procontention1" placeholder="Pro Contention 1"/>
                        <input className="forminput" type="text" name="procontention2" placeholder="Pro Contention 2"/>
                        <input className="forminput" type="text" name="procontention3" placeholder="Pro Contention 3"/>
                        <button type="submit">Save Changes</button>
                    </form>
                    <form className="editConContent" onSubmit={handleEditConContSubmit}>
                        <input className="forminput" type="text" name="conframework" placeholder="Con Framework"/>
                        <input className="forminput" type="text" name="concontention1" placeholder="Con Contention 1"/>
                        <input className="forminput" type="text" name="concontention2" placeholder="Con Contention 2"/>
                        <input className="forminput" type="text" name="concontention3" placeholder="Con Contention 3"/>
                        <button type="submit">Save Changes</button>
                    </form>
                </div>
                
                                
            </div>
        )
    }
    
}

export default TopicContent;