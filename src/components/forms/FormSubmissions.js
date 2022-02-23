import React from 'react';
import Submission from './Submission';

const FormSubmissions = ({ formName, submissions }) => {
    const submissionsForThisForm = submissions.filter(submission => submission[0].formName === formName)

    return (
        <div>
            <h3>Submissions for {formName}</h3>
            {submissionsForThisForm.map(sub => <Submission sub={sub}/>)}

        </div>
    )
}


export default FormSubmissions;