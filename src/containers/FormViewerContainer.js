import FormCard from "../components/forms/FormCard";

const FormViewerContainer = ({ forms, onNewSubmissions, handleDeleteSubmission }) => {
    return (
    <div>
        {forms.map(form => <FormCard form={form} key={form.id} onNewSubmissions={onNewSubmissions} handleDeleteSubmission={handleDeleteSubmission}/>)}
    </div>
    );
}


export default FormViewerContainer;