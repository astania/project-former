import FormCard from "../components/forms/FormCard";

const FormViewerContainer = ({ forms, onNewSubmissions }) => {
    return (
    <div>
        {forms.map(form => <FormCard form={form} key={form.id} onNewSubmissions={onNewSubmissions}/>)}
    </div>
    );
}


export default FormViewerContainer;