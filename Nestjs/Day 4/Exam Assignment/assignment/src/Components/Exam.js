import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../exam.css'

function Exam(props) {
    const [ questions, setQuestions ] = useState();
    const[ answers, setAnswers ] = useState({});
    const [alert, setAlert] = useState("")
    const [result, setResult] = useState("")

    const getQuestions = async () => {
        var result = await axios.get(`http://localhost:4000/exam/questions/${props.examId}`);
        console.log(result.data)
        setQuestions(result.data)
    }

    const setAnswer = (event) => {
        const { name, value } = event.target
        const selectedOption = questions[name].options[value]
        setAnswers({ ...answers, [event.target.name]: selectedOption})
        console.log(answers, "answers")
    }

    useEffect(() => {
        console.log(props.examId, "id")
        getQuestions();
    }, []);

    const submitExam = (event) => {
        event.preventDefault();
        if(Object.keys(answers).length === questions.length)
        {
            var marks = 0;
            Object.values(answers).forEach((ans) =>
            {
                if(ans.correct === true)
                {
                    marks += 1;
                }
            })
            setResult("Result: " + marks + "/" + questions.length);
        }
        else
        {
            setAlert("All questions are compulsory");
            setTimeout(() => setAlert(""), 2000);
        }

    }

    return(
        <>
        <h2>Exam</h2>
        <form onSubmit={submitExam}>
        {questions && questions.map((question, idx) => {
            return (
            <div className='m-2 mb-3'>
            { (idx + 1) + ") " + question.question}
            {question.options.map((opt, optIdx) => {
                return (
                <div className="form-check">
                <input className="form-check-input" type="radio" name={idx} value={optIdx} onChange={(e) => setAnswer(e)}></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    {opt.option}
                </label>
                </div>
                )
            })}
            </div>
            )
        })}
        { alert &&
            <div class="alert alert-danger m-3" role="alert">
                {alert}
            </div>}
        
        <input type="submit" className="btn btn-success m-2"></input>
        </form>
        { result &&
        <div class="alert alert-success m-3 p-4" role="alert">
            <h2>{result}</h2>
        </div>}
        </>
    )
}

export default Exam;