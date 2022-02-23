import { useState } from "react";

//job tracker association

const Form = ({ form }) => {
    const questions = form.questions

    const blankSubmission = () => {
        const submissionsArray = []
        questions.map(question => {
            return( submissionsArray.push( {
                id: question.id,
                type: question.type,
                prompt: question.prompt,
                response: ""
            })
               )
        })
        return submissionsArray
    }
    console.log(blankSubmission())

    const [formResponses, setFormResponses] = useState(blankSubmission)


    const handleChange = (e, prompt, index) => {
        console.log(e.target.value)
        console.log(prompt, index)
        
        console.log("testing:", formResponses[index].response)
        const updatedResponse = formResponses[index].response

        setFormResponses({...formResponses, updatedResponse: e.target.value})
        console.log(formResponses)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
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