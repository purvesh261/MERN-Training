import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../exam.css';

function ExamList(props) {
    const [exams, setExams] = useState();
    const [scores, setScores] = useState([])

    const getExams = async () => {
        var result = await axios.get("http://localhost:4000/exam/");
        setExams(result.data)
        var scores = await axios.get(`http://localhost:4000/exam/result/${props.user._id}`)
        setScores(scores.data)
    }

    useEffect(() => {
        getExams();
    }, [])

    const findUserResults = (examId) => {
        var result = null;
        console.log(scores, examId, "compater")
        for(let i = 0; i < scores.length; i++)
        {   
            console.log(scores[i], examId, "compater")
            if(scores[i]._id === examId)
            {
                result = scores[i]
                break
            }
        }
        if(result != null)
        {
            return result;
        }
        else
        {
            return {_id: examId, maxScore:"0", attempts:"0"}
        }
    }

    const onClickHandler = (index) => {
        props.setExamId(exams[index]._id)
        props.viewExams(false)
    }

    return (
        <div className='login-form'>
            <h3 className='text-center'>Exam Categories</h3>
            <table>
                <tbody>
                {exams && exams.map((exam, idx) => {
                let details = findUserResults(exam._id)
                    return (
                        <tr key={idx}>
                            <td><span key={idx}><button className='btn btn-primary m-2 ' onClick={() => onClickHandler(idx)} disabled={details.attempts >= 3}>{exam.examName}</button><br/></span></td>
                            <td>Max Score: {details.maxScore}<br/>Attempts: {details.attempts}<br/><span className='text-danger'>{details.attempts >= 3 && "Max attempts reached"}</span></td>
                        </tr>
                        )
                })}
                </tbody>
            </table>
            {/* {exams && exams.map((exam, idx) => {
                return <span key={idx}><button className='btn btn-primary m-2 w-100' onClick={() => onClickHandler(idx)}>{exam.examName}</button><br/></span>
            })} */}
        </div>
    )
}

export default ExamList;