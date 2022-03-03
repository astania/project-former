import { useState } from "react"
import Question from "../components/form builders/Question"
// import { v4 as uuidv4 } from 'uuid'

const FormBuilderContainer = ({ onAddForm }) => {


    const blankFormTemplate = {
        name: "",
        questions: []
    }

    const [newForm, setNewForm] = useState(blankFormTemplate)

    console.log("new form", newForm)

    const newFormQuestions = newForm.questions

    const handleNameChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setNewForm({ ...newForm, name: e.target.value })
    }

    const addAQuestion = (e) => {
        e.preventDefault()

        const buttonText = e.target.textContent

        if (buttonText.includes("text")) {
            setNewForm({
                ...newForm, questions: [...newForm.questions, {
                    type: "text",
                    prompt: "",
                    response: ""
                }]
            })
        } else {
            setNewForm({
                ...newForm, questions: [...newForm.questions, {
                    type: "radio",
                    prompt: "",
                    response: ""
                }]
            })
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        fetch("http://localhost:3001/forms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newForm),
        })
            .then(r => r.json)
            .then(addedForm => onAddForm(addedForm))
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
            <button onClick={addAQuestion}>Add a radio button question</button>

            {newFormQuestions.map((question, index) => <Question question={question} setNewForm={setNewForm} newFormQuestions={newFormQuestions} newForm={newForm} key={index} />)}

            <button type="submit">Save Form</button>

        </form>


    </div>;
}


export default FormBuilderContainer;

// import { useState } from "react"
// import Question from "../components/form builders/Question"
// import { v4 as uuidv4 } from 'uuid'
// import InitialForm from "../components/form builders/InitialForm"
// import FormTemplate from "../components/form builders/FormTemplate"

// const FormBuilderContainer = () => {


//     const blankFormTemplate = {
//         name: "",
//         questions: []
//     }

//     const [newForm, setNewForm] = useState(blankFormTemplate)

//     const handleNameChange = (e) => {
//         setNewForm({ ...newForm, name: e.target.value })
//     }

//     const handleFormNameSubmit = (e) => {
//         e.preventDefault()
//         console.log(newForm)

//     }

//     //user enters new form name in input field, presses enter
//     //input field becomes an h2 with the new form name
//     //question input field loads
//     //two buttons appear: add another question and save form
//     //add another question -> loads another question input field + two buttons
//     //save form submits the form and brings you back to the initial page to enter a new form name 


//     return <div>
//         {newForm.name === "" ? <InitialForm newForm={newForm} setNewForm={setNewForm} handleNameChange={handleNameChange} handleFormNameSubmit={handleFormNameSubmit} /> : <FormTemplate newForm={newForm} setNewForm={setNewForm} />}

//     </div>
// }


// export default FormBuilderContainer;