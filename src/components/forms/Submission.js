import { v4 as uuidv4 } from 'uuid'
import SubmissionResponse from './SubmissionResponse'

function Submission({ sub, submissionsForThisForm }) {
    // console.log("this is the sub:", sub)

    const responseNumber = submissionsForThisForm.indexOf(sub) + 1

    //remove first form name element from sub array
    const elementsToDisplay = sub.filter(entry => sub.indexOf(entry) > 0)
    

    return (
        <div>
            <h6>Submission #{responseNumber}</h6>
            {elementsToDisplay.map(element => <SubmissionResponse element={element} />)}
        </div>
    )
}

export default Submission