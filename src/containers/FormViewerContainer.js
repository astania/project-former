import FormCard from "../components/forms/FormCard";

const FormViewerContainer = ({ forms }) => {
    return (
    <div>
        {forms.map(form => <FormCard form={form} key={form.id}/>)}
    </div>
    );
}


export default FormViewerContainer;