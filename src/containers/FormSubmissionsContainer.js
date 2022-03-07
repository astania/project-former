import FormSubmissions from "../components/submissions/FormSubmissions";

const FormSubmissionsContainer = ({ submissions, forms, onDeleteSubmission }) => {

    return (<div>
        {forms.map(form => <FormSubmissions formName={form.name} submissions={submissions} key={form.id} onDeleteSubmission={onDeleteSubmission}/> )}
    </div>)
}


export default FormSubmissionsContainer;

