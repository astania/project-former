
const Question = ({ question, setNewForm }) => {

    console.log("question:", question)

    const handleChange = (e) => {
        // let value
        // e.target.type === "radio" ? value = "checked" : value = e.target.value

        const input = e.target.value

        
        
    }

    if(question.type === "text"){
    return (<div>
        <label> Prompt
            <input 
            type={question.type} 
            value={question.prompt}
            onChange={handleChange}/>
        </label>
    </div>);
    } else{
        return (<div>
            <label> Prompt
                <input 
                type={question.type} 
                value={question.prompt}
                onChange={handleChange}/>
            </label>
        </div>);
    }
}

export default Question;