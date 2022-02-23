import { useState } from "react";

//job tracker association

const Form = ({ form, onNewSubmissions }) => {
    const questions = form.questions
    const formName = form.name
    console.log("This is the form info", form)

    const blankSubmission = () => {
        const submissionsArray = [{formName: formName}]
        questions.map(question => {
            submissionsArray.push( {
                id: question.id,
                type: question.type,
                prompt: question.prompt,
                response: ""
            })
        })
        return submissionsArray
    }
    console.log(blankSubmission())

    const [formResponses, setFormResponses] = useState(blankSubmission)


    const handleChange = (e, prompt, index) => {
        // console.log(e.target.value)
        // console.log(prompt, index)
        const input = e.target.value
        
        
        const updatedResponse = formResponses.map(question => {
            if(question.prompt === prompt){
                return {...question, response: input}
            }
            return question
        })

        setFormResponses(() => updatedResponse)
        console.log(formResponses)
     
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