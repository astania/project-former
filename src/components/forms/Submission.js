import { v4 as uuidv4 } from 'uuid'
import SubmissionResponse from './SubmissionResponse'

function Submission({ sub, submissionsForThisForm }) {
    console.log("this is the sub:", sub)

    const responseNumber = submissionsForThisForm.indexOf(sub) + 1

    //remove first form name element from sub array
    const elementsToDisplay = sub.entries
    
    const handleDelete = () => {
        console.log(sub)
        // fetch(`http://localhost:3001/submissions/${sub.id}`)
    }

    return (
        <div>
            <p><b>Submission #{responseNumber}</b></p>
            {elementsToDisplay.map(element => <SubmissionResponse element={element} key={uuidv4()}/>)}
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default Submission