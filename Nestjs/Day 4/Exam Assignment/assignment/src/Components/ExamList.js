import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../exam.css';

function ExamList(props) {
    const [exams, setExams] = useState();

    const getExams = async () => {
        var result = await axios.get("http://localhost:4000/exam/");
        setExams(result.data)
    }

    useEffect(() => {
        getExams();
    }, [])

    const onClickHandler = (index) => {
        props.setExamId(exams[index]._id)
        props.viewExams(false)
    }

    return (
        <div className='login-form'>
            <h3 className='text-center'>Exam Categories</h3>
            {exams && exams.map((exam, idx) => {
                return <span key={idx}><button className='btn btn-primary m-2 w-100' onClick={() => onClickHandler(idx)}>{exam.examName}</button><br/></span>
            })}
        </div>
    )
}

export default ExamList;