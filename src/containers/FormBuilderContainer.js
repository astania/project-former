import { useState } from "react"
import Question from "../components/form builders/Question"

const FormBuilderContainer = ({ forms, setForms }) => {


    const blankFormTemplate = {
        name: "",
        questions: []
    }

    const [newForm, setNewForm] = useState([blankFormTemplate])

    console.log(newForm)

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setNewForm({ ...blankFormTemplate, name: e.target.value })
    }

    const addTextQuestion = (e) => {
        e.preventDefault()
        console.log(e.target)
        blankFormTemplate.questions.push( {
            type: "text",
            prompt: "",
        })
        return(
            <Question />
        )
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
           <button onClick={addTextQuestion}>Add a text question</button>
           <button>Add a radio button question</button>


            <button type="submit">Save Form</button>

        </form>


    </div>;
}


export default FormBuilderContainer;