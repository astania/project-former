import FormCard from "../components/forms/FormCard";

const FormViewerContainer = ({ forms, onNewSubmissions, handleDeleteSubmission, onDeleteForm }) => {
    return (
    <div>
        {forms.map(form => <FormCard onDeleteForm={onDeleteForm} form={form} key={form.id} onNewSubmissions={onNewSubmissions} handleDeleteSubmission={handleDeleteSubmission}/>)}
    </div>
    );
}


export default FormViewerContainer;