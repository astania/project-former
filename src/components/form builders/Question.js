
const Question = ({ question }) => {

    console.log("question:", question)
    return (
        <h1>this is a question</h1>
    )
  

    // if(question.type === "text"){
    // return (<div>
    //     <label> Prompt
    //         <input 
    //         type={question.type} 
    //         value={prompt}/>
    //     </label>
    // </div>);
    // } else{
    //     return (<div>
    //         <label> Prompt
    //             <input 
    //             type={question.type} 
    //             value={prompt}/>
    //         </label>
    //     </div>);
    // }
}

export default Question;