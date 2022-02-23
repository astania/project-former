import { v4 as uuidv4 } from 'uuid'

function Submission({ sub, submissionsForThisForm }) {

    const responseNumber = submissionsForThisForm.indexOf(sub) + 1

    return (
        <div>
            <h6>Submission #{responseNumber}</h6>
            {submissionsForThisForm.map(submission => { console.log(submission.length)
               //start at 1 to skip the first element in the array, which is always the form name
               for(let i = 1; i < submission.length; i++){
                   return (
                       <p>{submission[i].prompt}</p>
                   )
               }
            })}
        </div>
    )
}

export default Submission