import React from 'react';
import Submission from './Submission';

const FormSubmissions = ({ formName, submissions }) => {
    return (
        <div>
            <h3>{formName}</h3>
            {submissions.filter(submission => {
                if (submission[0] === formName) {
                    return <Submission submission={submission} />
                }
            })
        }
        </div>
    )
}


export default FormSubmissions;