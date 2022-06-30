import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import questions from './questions';
import RegisterForm from "./RegisterForm";
// import moment from "moment";
import CountdownClock from "react-countdown-clock";
import Question from "./Question";
const MainTest = () => {
  const [allquestions,setAllQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [showButton, setShowButton] = useState(false)
  const [getQuestions,setQuestions] = useState(false)
	const [myanswer,setMyAnswer] = useState()
    const getstate = () => {
      questions().then(question => {
          setAllQuestions(question);
          setQuestions(true)
		});
	  };

    const handleAnswerOptionClick = (isCorrect,answerOption) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		  setMyAnswer(answerOption)
			setShowButton(true)
	};
	const nextQuestion = ()=>{
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < allquestions.length) {
			setShowButton(false)
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setShowButton(false)
		}
	}

console.log(allquestions)


  return (
    <>
    {
      showScore ?
      (
				<div className='score-section'>
					<RegisterForm />
				</div>
			):
      getQuestions ?
              <Question 
              CountdownClock = {CountdownClock}
              setQuestions={setQuestions}
              currentQuestion={currentQuestion}
              allquestions={allquestions}
              myanswer={myanswer}
              handleAnswerOptionClick={handleAnswerOptionClick}
              showButton={showButton}
              nextQuestion={nextQuestion}
              />
      :
      <div className='mt-4 mb-5'>
         <div className='container'>
             <div className='row' style={{marginTop:"160px"}}>
                 <div className='col-md-6 m-auto'>
                 <h1 className='Exam_Welcome'>Welcome To PabJobs Test</h1>

                 <h5 className='Exam_Instuctions'>General Instructions : </h5>
                 <ul className='Exam_Instuction_ul'>
                     <li>All questions are compulsory.</li>
                     <li>Total 30 questions in Exam.</li>
                     <li>Each Question one Minute</li>
                     {/* <li>You may leave the hall after the first 30 minutes of the exam</li>
                     <li>After complete Exam Enter to Hire and Train Form and Fill The form Data</li>
                     <li>Keep your Admit Card on the table. Get permission from the HOD, if not in possession</li> */}
                     <li><b>NOTE :</b>To save answers,click on the Next button.</li>
                 </ul>
                 <div className='Exam_Test' onClick={()=>getstate()}>Proceed To Test</div>
                 </div>
                 <div className='col-md-6 text-center m-auto' >
                   
                    <img src="images/Online Test (2).png" className="img-fluid" alt="image" />
                 </div>
             </div>
         </div>
        </div>
    }
    </>
  );
};

export default MainTest;
