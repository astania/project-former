
const Question = ({ question, newFormQuestions, setNewForm, newForm }) => {

    const questionIndex = newFormQuestions.indexOf(question)

    const handleTextChange = (e) => {

        const input = e.target.value

        let updatedQuestions = [...newFormQuestions]
        updatedQuestions[questionIndex].prompt = input
        let updatedForm = { ...newForm }
        updatedForm.questions = updatedQuestions

        setNewForm(updatedForm)

    }

    const handleRadioChange = (e) => {
        console.log(e)
    }

    return (<div>
        <label> Prompt
            <input
                type={question.type}
                value={newForm.questions[questionIndex].prompt}
                onChange={handleTextChange} />
        </label>
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