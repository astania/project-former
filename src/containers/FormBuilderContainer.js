import { useState } from "react"
import Question from "../components/form builders/Question"

const FormBuilderContainer = ({ onAddForm, forms }) => {

    const blankFormTemplate = {
        name: "",
        questions: []
    }

    const [newForm, setNewForm] = useState(blankFormTemplate)

    const newFormQuestions = newForm.questions

    const handleNameChange = (e) => {
        e.preventDefault()

        setNewForm({ ...newForm, name: e.target.value })
    }

    const addAQuestion = (e) => {

        e.preventDefault()
        setNewForm({
            ...newForm, questions: [...newForm.questions, {
                type: "text",
                prompt: "",
                response: ""
            }]
        })
    }

    const handleSubmitForm = (e) => {

        e.preventDefault()

        if (newForm.name === "") {
            alert("Please give your form a name")
        }

        if (newFormQuestions.length === 0) {
            alert("Please add a question to your form")
        }

        if (newForm.name !== "" && newFormQuestions.length > 0) {
            fetch("http://localhost:3001/forms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newForm),
            })
                .then(r => r.json())
                .then(addedForm => onAddForm(addedForm))

            setNewForm(blankFormTemplate)
        }

    }

    return <div>

        <h1>Build Your Form</h1>
        <form
            onSubmit={handleSubmitForm}
        >

            <label>
                Form Name:
                <input type="text"
                    value={newForm.name}
                    name="name"
                    onChange={(e) => handleNameChange(e)}
                ></input>
            </label>
            <button onClick={addAQuestion}>Add a text question</button>

            {newFormQuestions.map((question, index) => <Question question={question} setNewForm={setNewForm} newFormQuestions={newFormQuestions} newForm={newForm} key={index} />)}

            <button type="submit">Save Form</button>

        </form>


    </div>;
}


export default FormBuilderContainer;







// const buttonText = e.target.textContent

//         if (buttonText.includes("text")) {
//             setNewForm({
//                 ...newForm, questions: [...newForm.questions, {
//                     type: "text",
//                     prompt: "",
//                     response: ""
//                 }]
//             })
//         } else {
//             setNewForm({
//                 ...newForm, questions: [...newForm.questions, {
//                     type: "radio",
//                     prompt: "",
//                     response: ""
//                 }]
//             })
//         }