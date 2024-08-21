import { useState } from "react";

function NewTopicForm() {
    
    const [formData, setFormData] = useState({
        resolution: "",
        proframework: "",
        procontention1: "",
        procontention2: "",
        procontention3: "",
        conframework: "",
        concontention1: "",
        concontention2: "",
        concontention3: ""
    })
    
    function handleSubmit(event) {
        event.preventDefault()

        const newFunTopic = {
            ...formData
        }

        console.log(newFunTopic)

        setFormData({
            resolution: "",
            proframework: "",
            procontention1: "",
            procontention2: "",
            procontention3: "",
            conframework: "",
            concontention1: "",
            concontention2: "",
            concontention3: ""
        })
    }

    function updateFunTopicData(event) {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <div className="addFunTopicContainer">
            <h1 className="header">New Topic Form</h1>
            <form className="addNewTopic" onSubmit={handleSubmit} >
                <input onChange={updateFunTopicData} value={formData.resolution} className="forminput" type="text" name="resolution" placeholder="New Topic Resolution"/>
                <input onChange={updateFunTopicData} value={formData.proframework} className="forminput" type="text" name="proframework" placeholder="Pro Framework"/>
                <input onChange={updateFunTopicData} value={formData.procontention1} className="forminput" type="text" name="procontention1" placeholder="Pro Contention 1"/>
                <input onChange={updateFunTopicData} value={formData.procontention2} className="forminput" type="text" name="procontention2" placeholder="Pro Contention 2"/>
                <input onChange={updateFunTopicData} value={formData.procontention3} className="forminput" type="text" name="procontention3" placeholder="Pro Contention 3"/>
                <input onChange={updateFunTopicData} value={formData.conframework} className="forminput" type="text" name="conframework" placeholder="Con Framework"/>
                <input onChange={updateFunTopicData} value={formData.concontention1} className="forminput" type="text" name="concontention1" placeholder="Con Contention 1"/>
                <input onChange={updateFunTopicData} value={formData.concontention2} className="forminput" type="text" name="concontention2" placeholder="Con Contention 2"/>
                <input onChange={updateFunTopicData} value={formData.concontention3} className="forminput" type="text" name="concontention3" placeholder="Con Contention 3"/>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}

export default NewTopicForm;