
const Question = ({ question, newFormQuestions, setNewForm, newForm }) => {

    const questionIndex = newFormQuestions.indexOf(question)

    const handleTextChange = (e) => {

        const input = e.target.value

        let updatedQuestions = [...newFormQuestions]
        updatedQuestions[questionIndex].prompt = input
        let updatedForm = { ...newForm, questions: updatedQuestions }

        setNewForm(updatedForm)
    }

    const handleDeleteQuestion = (e) => {
        e.preventDefault()

        const newQuestionsArray = newFormQuestions.filter(q => newFormQuestions.indexOf(q) !== newFormQuestions.indexOf(question))
        let updatedForm = { ...newForm }
        updatedForm.questions = newQuestionsArray

        setNewForm(updatedForm)
    }

    return (<div>
        <label> Prompt
            <input
                type={question.type}
                value={newForm.questions[questionIndex].prompt}
                onChange={handleTextChange} />
        </label>
        <button onClick={handleDeleteQuestion}>delete question</button>
    </div>);
}

export default Question;











// if (question.type === "text") {
//     return (<div>
//         <label> Prompt
//             <input
//                 type={question.type}
//                 value={newForm.questions[questionIndex].prompt}
//                 onChange={handleTextChange} />
//         </label>
//     </div>);
// } else {
//     return (<div>
//         <label> Prompt
//             <input
//                 type={question.type}
//                 value={question.prompt}
//                 onChange={handleRadioChange} />
//         </label>
//     </div>);
// }