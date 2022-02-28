
const Question = ({ type, prompt }) => {
    return (<div>
        <label> Prompt
            <input type={type} value={prompt}></input>
        </label>
    </div>);
}

export default Question;