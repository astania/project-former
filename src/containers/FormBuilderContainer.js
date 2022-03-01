import { useState } from "react"
import Question from "../components/form builders/Question"

const FormBuilderContainer = () => {


    const blankFormTemplate = {
        name: "",
        questions: []
    }

    const [newForm, setNewForm] = useState(blankFormTemplate)

    console.log(newForm)

    const newFormQuestions = newForm.questions
    const updatedQuestions = []

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setNewForm({ ...newForm, name: e.target.value })
    }

    //how to add a question object to the questions array??
    const addAQuestion = (e) => {
        e.preventDefault()
        updatedQuestions.push({
            type: "text",
            prompt: "",
        })
        
        setNewForm({...newForm, questions: [...newForm.questions, {
            type: "text",
            prompt: "",
        }]})
        console.log("updated form", newForm)

        // const buttonText = e.target.textContent
        // if (buttonText.includes("text")) {
        //     // console.log("added a text question")
        //     newForm.questions.push({
        //         type: "text",
        //         prompt: "",
        //     }

        //     )
        // } else {
        //     // console.log("added a radio question")
        //     newForm.questions.push({
        //         type: "radio",
        //         prompt: "",
        //     })
        // }
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
            {/* <button onClick={addAQuestion}>Add a radio button question</button> */}

            {newFormQuestions.map(question => <Question question={question} key={question.prompt} />)}

            <button type="submit">Save Form</button>

        </form>


    </div>;
}


export default FormBuilderContainer;