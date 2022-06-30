import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom';
import Calculator from './Calculator/Calculator';
import Modal from 'react-modal';




const customStyles = {
  content: {
    position: 'absolute',
    inset: '54% 45% auto auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'fit-content',
    height:'fit-content',
    border: 'none',
    background: 'none',
  },
  overlay:{
    background:'none',
  },
};



const Question = ({CountdownClock,setQuestions,currentQuestion,allquestions,myanswer,handleAnswerOptionClick,showButton,nextQuestion})=>{

  const [modalIsOpen,setModalIsOpen] = useState(false)

  const navigate = useNavigate();
  const redirectHome = ()=>{
    navigate("/hireandtrain")
  }

    return(
      

        <div className="container main_test_container">
        <div className='text-right Q_calculator'  >
                <span onClick={()=>setModalIsOpen(true)}><i class="fas fa-calculator"></i></span>
                <Modal isOpen={modalIsOpen} style={customStyles}  
                onRequestClose={()=>setModalIsOpen(false)} className="modal_calculator">
                  <>
                  <span className='close_caluculator' onClick={()=>setModalIsOpen(false)}>x</span>
                  <Calculator/>
                 
                </>
                </Modal>
          </div>
         
      <div className="container maintest">
      <CountdownClock
                  seconds={30 * 60}
                  showMilliseconds={true}
                  timeFormat="hms"
                  alpha={0.9}
                  size={100}
                  color={"#270D44"}
                  fontSize="auto"
                  onComplete={() =>redirectHome()}
                />
        <div className="Qnumber">
          <h3>Question {currentQuestion + 1} of {allquestions.length}</h3>
        </div>
        <div className="question">
          <div className="Qcontent">
            <p>Q). {allquestions[currentQuestion]?.questionText} </p>
          </div>
        </div>
        <div className="row online_main">
        {allquestions[currentQuestion]?.answerOptions.map((answerOption) => (
          <div className="col-lg-6 col-md-6">
            <div id="option_main" className={myanswer === answerOption ? 'selected':null}>
              <p   id="option" onClick={() => handleAnswerOptionClick(answerOption.isCorrect,answerOption)}>
              {answerOption.answerText}</p>
            </div>
          </div>
          ))}
        </div>
        <div className="Qnext_btn text-center">
        {
          showButton?
          <button onClick={()=>nextQuestion()}>Next</button>: <button className="next_disabled">Next</button>
        }
        </div>
      </div>
      </div>
      
    )
}
export default Question