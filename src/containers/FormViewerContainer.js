import FormCard from "../components/forms/FormCard";

const FormViewerContainer = ({ forms }) => {
    return (
    <div>
        {forms.map(form => <FormCard name={form.name} questions={form.questions}/>)}
    </div>
    );
}


export default FormViewerContainer;