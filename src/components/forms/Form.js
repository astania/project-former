import { useState } from "react";

const Form = ({ form }) => {
    const questions = form.questions

    const blankSubmission = {
        "name": "",
        "questions": [{
            "type": "",
            "prompt": "",
            "response": ""
        }]
    }

    const [formResponses, setFormResponses] = useState(blankSubmission)


    const handleChange = (event) => {
        console.log(event.target.value)
        setFormResponses(event.target.value)
        console.log(formResponses)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.value)
    }

    return (
        <div>
            <h1>{form.name}</h1>
            <form onSubmit={handleSubmit}>
                {questions.map(question => { 
                    
                    return (
                        <label key={question.id}>
                            {question.prompt}
                            <input
                                value={question.response}
                                onChange={handleChange}
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