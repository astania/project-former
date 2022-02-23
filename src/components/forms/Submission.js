
function Submission({ sub, submissionsForThisForm }) {

    const responseNumber = submissionsForThisForm.indexOf(sub) + 1

    return (
        <div>
            <h6>Submission #{responseNumber}</h6>
        </div>
    )
}

export default Submission