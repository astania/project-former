import FormSubmissions from "../components/forms/FormSubmissions";

const FormSubmissionsContainer = ({ submissions, forms }) => {
    return (<div>
        {forms.map(form => <FormSubmissions formName={form.name} submissions={submissions}/> )}
    </div>)
}


export default FormSubmissionsContainer;