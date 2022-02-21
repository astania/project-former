const FormCard = ({name, questions}) => {
    return (
    <div>
        <h3>{name}</h3>
        <h4>This form has {questions.length} questions</h4>

    </div>);
}


export default FormCard;