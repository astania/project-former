import Form from "./Form"
import { useState } from "react"

const FormCard = ({ form, onNewSubmissions, onDeleteForm }) => {
    const [selectedForm, setSelectedForm] = useState(false)

    const handleSelectForm = () => {
        // console.log(form)
        setSelectedForm(!selectedForm)
    }

    const handleDelete = () => {
        // console.log("formID", form.id)
        fetch(`http://localhost:3001/forms/${form.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => onDeleteForm(form.id))
    }

    return (
        <>
            <div>
                <h4>{form.name}</h4>
                <h6>This form has {form.questions.length} questions</h6>
                <button onClick={handleSelectForm}>{selectedForm ? "un-select form" : "select form"}</button>
                <button onClick={handleDelete}>delete form</button>
            </div>
            <div>{selectedForm ? <Form form={form} onNewSubmissions={onNewSubmissions} key={form.id}/> : null}</div>
        </>
    );
}


export default FormCard;