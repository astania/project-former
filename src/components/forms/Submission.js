import { v4 as uuidv4 } from 'uuid'
import SubmissionResponse from './SubmissionResponse'

function Submission({ sub, submissionsForThisForm }) {
    // console.log("this is the sub:", sub)

    const responseNumber = submissionsForThisForm.indexOf(sub) + 1

    //remove first form name element from sub array
    const elementsToDisplay = sub.filter(entry => sub.indexOf(entry) > 0)
    
    const handleDelete = () => {
        console.log(sub)
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