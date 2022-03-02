
const Question = ({ question, newFormQuestions, setNewForm, newForm }) => {

    const questionIndex = newFormQuestions.indexOf(question)
    
    const handleTextChange = (e) => {

        const input = e.target.value
        
        let updatedQuestions = [...newFormQuestions]
        updatedQuestions[questionIndex].prompt = input
        let updatedForm = {...newForm}
        updatedForm.questions = updatedQuestions

        setNewForm(updatedForm)

        console.log("input", input)
        console.log("new form", newForm)
        
    }

    const handleRadioChange = (e) => {
        console.log(e)
    }

    if (question.type === "text") {
        return (<div>
            <label> Prompt
                <input
                    type={question.type}
                    value={newForm.questions[questionIndex].prompt}
                    onChange={handleTextChange} />
            </label>
        </div>);
    } else {
        return (<div>
            <label> Prompt
                <input
                    type={question.type}
                    value={question.prompt}
                    onChange={handleRadioChange} />
            </label>
        </div>);
    }
}

export default Question;