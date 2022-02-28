import { useState } from "react"
import Question from "../components/form builders/Question"

const FormBuilderContainer = ({ forms, setForms }) => {


    const blankFormTemplate = {
        name: "",
        questions: []
    }

    const [newForm, setNewForm] = useState(blankFormTemplate)

    console.log(newForm)

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setNewForm({ ...newForm, name: e.target.value })
    }

    const addAQuestion = (e) => {
        e.preventDefault()
        const buttonText = e.target.textContent
        if (buttonText.includes("text")) {
            newForm.questions.push({
                type: "text",
                prompt: "",
            })
        } else {
            newForm.questions.push({
                type: "radio",
                prompt: "",
            })
        }

        console.log(newForm)

    }

    return <div>

        <h1>Build Your Form</h1>
        <form
        // onSubmit={handleSubmit}
        >

            <label>
                Form Name:
                <input type="text"
                    value={newForm.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                ></input>
            </label>
            <button onClick={addAQuestion}>Add a text question</button>
            <button onClick={addAQuestion}>Add a radio button question</button>
            {newForm.questions.map(question => <Question type={question.type} prompt={question.prompt} />)}


            <button type="submit">Save Form</button>

        </form>


    </div>;
}


export default FormBuilderContainer;