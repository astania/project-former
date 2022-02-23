import React from 'react';
import Submission from './Submission';
import { v4 as uuidv4 } from 'uuid'

const FormSubmissions = ({ formName, submissions }) => {
    const submissionsForThisForm = submissions.filter(submission => submission[0].formName === formName)

    return (
        <div>
            <h3>Submissions for {formName}</h3>
            {submissionsForThisForm.map(sub => <Submission sub={sub} submissionsForThisForm={submissionsForThisForm} key={uuidv4()}/>)}

        </div>
    )
}


export default FormSubmissions;