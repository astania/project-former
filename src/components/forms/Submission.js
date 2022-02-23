import { v4 as uuidv4 } from 'uuid'

function Submission({ sub, submissionsForThisForm }) {
    console.log("this is the sub:", sub)

    const responseNumber = submissionsForThisForm.indexOf(sub) + 1

    return (
        <div>
            <h6>Submission #{responseNumber}</h6>
            {submissionsForThisForm.map(submission => { console.log(submission.length)
               //start at 1 to skip the first element in the array, which is always the form name
               for(let i = 1; i < submission.length; i++){
                   return (
                       <p><b>{submission[i].prompt}:</b> {submission[i].response}</p>
                   )
               }
            })}
        </div>
    )
}

export default Submission