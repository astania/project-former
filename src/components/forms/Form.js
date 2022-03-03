import { useState } from "react";

const Form = ({ form, onNewSubmissions }) => {
    const questions = form.questions

    const blankSubmissionTemplate = () => {
        const submission = {
            formName: form.name,
            entries: []
        }
        questions.map(question => {
            return (submission.entries.push({
                id: question.id,
                type: question.type,
                prompt: question.prompt,
                response: ""
            }))
        })
        return submission
    }

    const [formResponses, setFormResponses] = useState(blankSubmissionTemplate())

    const handleChange = (e, prompt) => {
 
        const input = e.target.value
        const responseQuestions = formResponses.entries

        const updatedResponse = responseQuestions.map(question => {
            if (question.prompt === prompt) {
                return { ...question, response: input }
            }
            return question
        })

        setFormResponses(() => ({...formResponses, entries: updatedResponse}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3001/submissions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formResponses),
        })
            .then(r => r.json())
            .then(newSubmission => onNewSubmissions(newSubmission))

    }

    return (
        <div>
            <h1>{form.name}</h1>
            <form onSubmit={handleSubmit}>
                {questions.map((question) => {
                    return (
                        <label key={question.id}>
                            {question.prompt}
                            <input
                                value={blankSubmissionTemplate().response}
                                onChange={(e) => handleChange(e, question.prompt)}
                            ></input>
                        </label>
                    )
                })
                }
                <button type="submit">Submit</button>

            </form>
        </div>
    );
}


export default Form;