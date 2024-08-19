import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

function TopicContent() {
    
    const [topic, setTopic] = useState(null)
    const [editFormData, setEditFormData] = useState({
        proframework: "Framing",
        procontention1: "Blah",
        procontention2: "Blah Blah",
        procontention3: "Blah Blah Blah",
        conframework: "Framing",
        concontention1: "Blah",
        concontention2: "Blah Blah",
        concontention3: "Blah Blah Blah"
    })

    const {id} = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:4020/topics/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then(topicData => console.log(topicData))
            }
        })
    },[])

    return (
        <div>
            <h1>Here is the Topic Content Page that presents when a Topic is clicked on</h1>
            <h3>This is the topic resolution</h3>
            <div className="proContent">
                <h5>Framework</h5>
                <ol>
                    <li>Contention 1</li>
                    <li>Contention 2</li>
                    <li>Contention 3</li>
                </ol>
            </div>
            <div className="conContent">
                <h5>Framework</h5>
                <ol>
                    <li>Contention 1</li>
                    <li>Contention 2</li>
                    <li>Contention 3</li>
                </ol>
            </div>
            <form className="editContent">
                <input type="text" name="proContentFramework" placeholder="Pro Framework"/>
                <input type="text" name="proContentContention1" placeholder="Contention 1"/>
                <input type="text" name="proContentContention2" placeholder="Contention 2"/>
                <input type="text" name="proContentContention3" placeholder="Contention 3"/>
                <input type="text" name="conContentFramework" placeholder="Con Framework"/>
                <input type="text" name="conContentContention1" placeholder="Contention 1"/>
                <input type="text" name="conContentContention2" placeholder="Contention 2"/>
                <input type="text" name="conContentContention3" placeholder="Contention 3"/>
            </form>
        </div>
        

    )
}

export default TopicContent;