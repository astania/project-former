
const SubmissionResponse = ({element}) => {
    return (
        <div>
            <p><b>{element.prompt}:</b> {element.response}</p>
        </div>);
}

export default SubmissionResponse;