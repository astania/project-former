
const FormBuilderContainer = () => {
    import { useState } from "react"

    const blankFormTemplate = {
        name: "",
        questions: [
            {
                type: "text",
                prompt: "",
            }
        ]
    
    }

    const [formQuestions, setFormQuestions] = useState([blankFormTemplate])

    return <div>

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


        </div>;
}


        export default FormBuilderContainer;