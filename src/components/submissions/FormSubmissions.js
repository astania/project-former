import React from 'react';
import Submission from './Submission';
import { v4 as uuidv4 } from 'uuid'

const FormSubmissions = ({ formName, submissions, onDeleteSubmission }) => {

    const submissionsForThisForm = submissions.filter(submission => submission.formName === formName)

   
    return (
        <div>
            <h3>Submissions for {formName}</h3>
            {submissionsForThisForm.length === 0 ? <h6><em>{formName} has no submissions</em></h6> : submissionsForThisForm.map(sub => <Submission sub={sub} submissionsForThisForm={submissionsForThisForm} key={uuidv4()} onDeleteSubmission={onDeleteSubmission} />)}

        </div>
    )
}


export default FormSubmissions;