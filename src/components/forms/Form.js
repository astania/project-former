import { useState } from "react";

const Form = ({ form }) => {
    const questions = form.questions

    const blankSubmission = ""

    const [formResponses, setFormResponses] = useState(blankSubmission)
  

    const handleChange = (event) => {
        console.log(event.target.value)
        setFormResponses(event.target.value)
        console.log(formResponses)
    }

    return (
        <div>
            <h1>{form.name}</h1>
            <form>
                {questions.map(question => {
                    return (
                        <label>
                            {question.prompt}
                                value={question.response}
                                onChange={handleChange}
                            ></input>
                        </label>
                    )
                })}
            </form>
        </div >
    );
}


export default Form;