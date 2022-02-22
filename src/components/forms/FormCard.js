import Form from "./Form"
import { useState } from "react"

const FormCard = ({form}) => {
    const [selectedForm, setSelectedForm] = useState(false)

    const handleSelectForm = () => {
        // console.log(form)
        setSelectedForm(!selectedForm)
    }


    return (
    <>   
    <div>
        <h4>{form.name}</h4>
        <h6>This form has {form.questions.length} questions</h6>
        <button onClick={handleSelectForm}>select this form</button>
    </div>
    <div>{selectedForm ? <Form form={form}/> : null}</div>
    </> 
    );
}


export default FormCard;