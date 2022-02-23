
const SubmissionResponse = ({element}) => {
    return (
        <div>
            <h6><b>{element.prompt}:</b> {element.response}</h6>
        </div>);
}

export default SubmissionResponse;