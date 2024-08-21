import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function FunTopicContent() {
    
    const [funTopic, setFunTopic] = useState(null)
    // const [newProContentForm, setNewProContentForm] = useState("")


    const {id} = useParams();
    // console.log(useParams())
    // console.log(id)
    
    // const {updateTopic} =useOutletContext()
    // console.log(updateTopic)
    
    useEffect(() => {
        fetch(`http://localhost:4020/funTopics/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then((funTopicData) => setFunTopic(funTopicData))
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


    // }

    if(funTopic!==null) {
        return (
            <div className="fulltopiccontentcontainer">
                <div className="existingcontentcontainer">
                    <h2 className="topicResolution">{funTopic.resolution}</h2>
                    <div className="casecontent">
                        <div className="proCase">
                            <h3 className="procaseheader">Pro Case</h3>
                            <h5>{funTopic.proframework}</h5>
                            <ol className="proContentions">
                                <li className="contention">{funTopic.procontention1}</li>
                                <li className="contention">{funTopic.procontention2}</li>
                                <li className="contention">{funTopic.procontention3}</li>
                            </ol>
                            {/* <form className="addProContention" onSubmit={handleNewProContSubmit}>
                                <input type="text" name="newProContention" placeholder="Add a Pro contention..." onChange={handleNewProContChange}  value={newProContentForm}/>
                            </form> */}
                        </div>
                        <div className="conCase">
                            <h3 className="concaseheader">Con Case</h3>
                            <h5>{funTopic.conframework}</h5>
                            <ol className="conContentions">
                                <li className="contention">{funTopic.concontention1}</li>
                                <li className="contention">{funTopic.concontention2}</li>
                                <li className="contention">{funTopic.concontention3}</li>
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

export default FunTopicContent;