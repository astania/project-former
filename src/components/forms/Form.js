import { useState } from "react";

//job tracker association

const Form = ({ form, onNewSubmissions }) => {
    const questions = form.questions
    const formName = form.name

    const blankSubmission = () => {
        const submissionsArray = [{formName: formName}]
        questions.map(question => {
            return (submissionsArray.push( {
                id: question.id,
                type: question.type,
                prompt: question.prompt,
                response: ""
            }))
        })
        return submissionsArray
    }

    const [formResponses, setFormResponses] = useState(blankSubmission())

    console.log(formResponses)

    const handleChange = (e, prompt, index) => {
        // console.log(e.target.value)
        // console.log(prompt, index)
        const input = e.target.value
        
        
        const updatedResponse = formResponses.map(question => {
            if(question.prompt === prompt){
                // console.log(question.prompt)
                return {...question, response: input}
            }
            return question
        })

        setFormResponses(() => updatedResponse)
        // console.log("updated forms", formResponses)
     
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