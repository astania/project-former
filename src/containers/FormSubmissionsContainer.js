import FormSubmissions from "../components/forms/FormSubmissions";

const FormSubmissionsContainer = ({ submissions, forms }) => {
    console.log(forms)
    console.log(submissions)
    return (<div>
        {forms.map(form => <FormSubmissions formName={form.name} submissions={submissions} key={form.id}/> )}
    </div>)
}


export default FormSubmissionsContainer;

