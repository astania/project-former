import React from 'react';
import Submission from './Submission';

const FormSubmissions = ({ submissions }) => {
    return (<div>
        {submissions.map(submission => <Submission submission={submission}/> )}
    </div>);
}


export default FormSubmissions;