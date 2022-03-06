import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../exam.css';
import Question from './Question';


function Exam(props) {
    const [ questionsLength, setQuestionsLength ] = useState();
    const [questionNo, setQuestionNo] = useState(1);
    const[ answers, setAnswers ] = useState({});
    const [alert, setAlert] = useState("")
    const [result, setResult] = useState("")

    const getQuestionsLength = async () => {
        var result = await axios.get(`http://localhost:4000/exam/questions/${props.examId}`);
        console.log(result.data)
        setQuestionsLength(result.data)
    }

    const setAnswer = (event, question) => {
        const { name, value } = event.target
        const selectedOption = question.options[value]
        setAnswers({ ...answers, [event.target.name]: selectedOption})
        console.log(answers, "answers")
    }

    useEffect(() => {
        console.log(props.examId, "id")
        getQuestionsLength();
    }, []);

    const submitExam = async () => {
        if(Object.keys(answers).length === questionsLength)
        {
            var marks = 0;
            Object.values(answers).forEach((ans) =>
            {
                if(ans.correct === true)
                {
                    marks += 1;
                }
            })

            var resultObj = {
                userId: props.user._id,
                examId: props.examId,
                score: marks,
                answers: answers
            }
            var result = await axios.post("http://localhost:4000/exam/result", resultObj)
            setResult("Result: " + marks + "/" + questionsLength);
        }
        else
        {
            setAlert("All questions are compulsory");
            setTimeout(() => setAlert(""), 2000);
        }

    }

    const exit = () => 
    {
        props.setExamId(null)
        props.setViewExams(true)
    }

    return(
        <>
        <h2>Exam</h2>
        <form>
            <Question questionNo={questionNo} setQuestionNo={setQuestionNo} answers={answers} setAnswer={setAnswer} examId={props.examId} disabled={result}/>    
        </form>

        { Number(questionNo) < Number(questionsLength)? 
        <>
            { questionNo > 1 &&<button onClick={() => setQuestionNo(questionNo - 1)} className="btn btn-primary m-2">Previous</button> }
            <button onClick={() => setQuestionNo(questionNo + 1)} className="btn btn-primary m-2">Next</button> 
        </>
        : 
        <>
            <button onClick={() => setQuestionNo(questionNo - 1)} className="btn btn-primary m-2">Previous</button> 
            <input type="submit" onClick={submitExam} className="btn btn-success m-2" disabled={result === ""? false: true}></input>
        </>
        }

        { alert &&
            <div className="alert alert-danger m-3" role="alert">
                {alert}
            </div>}

        { result &&
        <div className="alert alert-success m-3 p-4" role="alert">
            <h2>{result}</h2>
            <button onClick={exit} className="btn btn-primary">Exit</button>
        </div>}
        </>
    )
}

export default Exam;