import React from 'react';
import Submission from './Submission';
import { v4 as uuidv4 } from 'uuid'

const FormSubmissions = ({ formName, submissions, onDeleteSubmission }) => {
    // console.log("submissions", submissions)
    const submissionsForThisForm = submissions.filter(submission => submission.formName === formName)

    // console.log("FOR THIS FORM", submissionsForThisForm)

    return (
        <div>
            <h3>Submissions for {formName}</h3>
            {submissionsForThisForm.map(sub => <Submission sub={sub} submissionsForThisForm={submissionsForThisForm} key={uuidv4()} onDeleteSubmission={onDeleteSubmission} />)}

        </div>
    )
}


export default FormSubmissions;