import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../exam.css'

function Question(props) {
    const [question, setQuestion] = useState()

    const getQuestion = async () => {
        var result = await axios.get(`http://localhost:4000/exam/questions/${props.examId}/${props.questionNo}`);
        console.log(result.data)
        setQuestion(result.data)
    }

    const isSelected = (option) =>
    {
        console.log(props.answers[props.questionNo], option, "compar")
        if(JSON.stringify(props.answers[props.questionNo]) === JSON.stringify(option))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    useEffect(() => {
        console.log(props.answers[props.questionNo], "selected")
        getQuestion();
    }, [props.questionNo]);

    return (
        <div className='m-2 mb-3'>
        {question && (props.questionNo + ") " + question.question)}
        {question && question.options.map((opt, optIdx) => {
            return (
            <div className="form-check" key={optIdx}>
            <input className="form-check-input" type="radio" name={props.questionNo} value={optIdx} onChange={(e) => props.setAnswer(e, question)} checked={isSelected(opt)} disabled={props.disabled === ""? false: true}></input>
            <label className="form-check-label">
                {opt.option}
            </label>
            </div>
            )
        })}
        </div>
    )
}

export default Question;