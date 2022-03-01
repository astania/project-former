import { useState } from "react";

//job tracker association

const Form = ({ form, onNewSubmissions }) => {
    const questions = form.questions

    const blankSubmission = () => {
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

    const [formResponses, setFormResponses] = useState(blankSubmission())

    // console.log("FormResponse", formResponses)

    const handleChange = (e, prompt, index) => {
        // console.log(e.target.value)
        // console.log(prompt, index)
        const input = e.target.value
        const questions = formResponses.entries

        // console.log("response", formResponses)

        const updatedResponse = questions.map(question => {
            if (question.prompt === prompt) {
                // console.log(question.prompt)
                return { ...question, response: input }
            }
            return question
        })

        // console.log("UPDATE",updatedResponse)

        setFormResponses(() => ({ formResponses, entries: updatedResponse }))
        console.log("updated forms", formResponses)

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

        console.log(blankSubmission())

    }

    return (
        <div>
            <h1>{form.name}</h1>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => {
                    return (
                        <label key={question.id}>
                            {question.prompt}
                            <input
                                value={blankSubmission().response}
                                onChange={(e) => handleChange(e, question.prompt, index)}
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