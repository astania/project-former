import Form from "./Form"

const FormCard = ({form}) => {
    const handleSelectForm = () => {
        console.log(form)
        return(
            <Form form={form}/>
        )
    }


    return (
    <div>
        <h4>{form.name}</h4>
        <h6>This form has {form.questions.length} questions</h6>
        <button onClick={handleSelectForm}>select this form</button>
    </div>);
}


export default FormCard;