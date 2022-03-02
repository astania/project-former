
const Question = ({ question, newFormQuestions, setNewForm, newForm }) => {

    console.log("question:", question)

    const handleTextChange = (e, prompt) => {
        e.preventDefault()
        const input = e.target.value
        prompt = input
        const questionIndex = newFormQuestions.indexOf(question)

        newFormQuestions.map(q => (newFormQuestions.indexOf(q) === questionIndex){

        })

        console.log("prompt", prompt)
        // setNewForm({...newForm, questions: [...newForm.questions, {
        //     type: question.type,
        //     prompt: input,
        //     response: question.response
        // }]})
        
        // setNewForm({ ...newForm, question.prompt: input })
    }

    const handleRadioChange = (e) => {
        console.log(e)
    }

    if(question.type === "text"){
    return (<div>
        <label> Prompt
            <input 
            type={question.type} 
            value={question.prompt}
            onChange={(e) => handleTextChange(e, question.prompt)}/>
        </label>
    </div>);
    } else{
        return (<div>
            <label> Prompt
                <input 
                type={question.type} 
                value={question.prompt}
                onChange={handleRadioChange}/>
            </label>
        </div>);
    }
}

export default Question;