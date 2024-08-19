import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function TopicContent() {
    
    const [topic, setTopic] = useState(null)
    // const [editFormData, setEditFormData] = useState({
    //     proframework: "Framing",
    //     procontention1: "Blah",
    //     procontention2: "Blah Blah",
    //     procontention3: "Blah Blah Blah",
    //     conframework: "Framing",
    //     concontention1: "Blah",
    //     concontention2: "Blah Blah",
    //     concontention3: "Blah Blah Blah"
    // })

    const {id} = useParams();
    // console.log(useParams())
    // console.log(id)
    
    
    useEffect(() => {
        fetch(`http://localhost:4020/topics/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then((topicData) => setTopic(topicData))
            }
        })
    },[])

    // console.log(topic)

    // Error was happening because I was returning JSX before the fetch actually sets the topicData
    if(topic!==null) {
        return (
            <div className="topiccontentcontainer">
                <h2 className="topicResolution">{topic.resolution}</h2>
                <div className="casecontent">
                    <div className="proCase">
                        <h5>{topic.proframework}</h5>
                        <ol className="proContentions">
                            <li>{topic.procontention1}</li>
                            <li>{topic.procontention2}</li>
                            <li>{topic.procontention3}</li>
                        </ol>
                    </div>
                    <div className="conCase">
                        <h5>{topic.conframework}</h5>
                        <ol className="conContentions">
                            <li>{topic.concontention1}</li>
                            <li>{topic.concontention2}</li>
                            <li>{topic.concontention3}</li>
                        </ol>
                    </div>
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
    
}

export default TopicContent;