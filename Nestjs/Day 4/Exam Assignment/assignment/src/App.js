// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Login from "./Components/Login";
import ExamList from "./Components/ExamList";
import Exam from "./Components/Exam";

function App() {
  const [loggedIn, setLogin] = useState(false);
  const [viewExams, setViewExams] = useState(true)
  const [examId, setExamId] = useState()

  return (
    <div className="App">
      { !loggedIn && <Login setLogin={setLogin} /> }
      { loggedIn && viewExams && <ExamList viewExams={setViewExams} setExamId={setExamId} />}
      { loggedIn && examId && <Exam examId={examId}/>}
    </div>
  );
}

export default App;
