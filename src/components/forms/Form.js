import { useState } from "react";

const Form = ({ form }) => {
    const questions = form.questions

    const blankSubmission = () => {
        const submissions = questions.map(question => {
            return( [{
                id: question.id,
                type: question.type,
                prompt: question.prompt,
                response: ""
            }])
        })
        return submissions
    }
    console.log(blankSubmission())

    const [formResponses, setFormResponses] = useState(blankSubmission)


    const handleChange = (event) => {
        console.log(event.target.value)
        setFormResponses(() => {
        
        })
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
                                value={blankSubmission.}
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