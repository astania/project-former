
const FormViewerContainer = ({ forms }) => {
    return (
    <div>
        {forms.map(form => <FormCard />)}
    </div>
    );
}


export default FormViewerContainer;