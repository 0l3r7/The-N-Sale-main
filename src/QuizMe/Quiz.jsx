import React, { useState } from 'react'
import QuestionCards from './QuestionCards/QuestionCards'
import { questions } from '../components/Data/question';


function Quiz() {
    const [currentQuestion, setCurrentQuestion]= useState(0);
    const [selectedAnswer, setSelectedAnswer]= useState(null);
    const[score, setScore] = useState(0);
    const[isFinished, setIsFinished] = useState(false);
    const[showFeedback, setShowFeedback]= useState(false);

    const handleAnswer = (option) =>{
      if (showFeedback) return;
      setSelectedAnswer(option);
      setShowFeedback(true);

      if (option === questions[currentQuestion].answer ){
        setScore(score +1);
      }
    }


    const goNextQ = () =>{
      if (currentQuestion + 1 < questions.length){
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else{
        setIsFinished(true);
      }
    };

    const restartQuiz = () =>{
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsFinished(false);
    }

  return (
    <div className=' min-h-screen bg-gray-900 text-white items-center flex flex-col justify-start gap-2  pt-4'>
        <h1 className=' font-bold text-blue-500 text-4xl '>Quiz This N.</h1>
        <p className='text-gray-400'>Test Your Racing Knowledge</p>

       
        {!isFinished ?(
          <>{/* Question placeholder */}
        <div className=' items-center'>
           
            <QuestionCards 
            showFeedback={showFeedback}
            onAnswer={handleAnswer} 
            data={questions[currentQuestion]}
            selected={selectedAnswer}
            current={currentQuestion}
            total={questions.length}
            score={score}
            />
            
        </div>
        
        <div>
          {showFeedback && (
            <button
            className='bg-linear-to-r from-indigo-500 to-blue-700 py-3 px-6 rounded-full shadow-lg cursor-pointer font-semibold'
            onClick={goNextQ}>
              {currentQuestion +1 <questions.length
              ? "Continue"
              : "See Results"}
            </button>
          )}
        </div>
        </>
        )
          :(
            <div className='  mt-6 items-center text-center'> 
            <h2 className='text-4xl mb-3 font-bold'>The N. Quiz is Done!!</h2>
            <p className=' font-semibold'>You Scored <span>{score}</span> out of {" "}
            <span>{questions.length}</span> and it is {" "}
            {Math.round((score / questions.length)* 100)} %</p>
            
            <button className='bg-linear-to-r mt-5 from-indigo-500 to-blue-700 py-3 px-6 rounded-full shadow-lg cursor-pointer font-semibold' onClick={restartQuiz}>Restart Quiz</button>
 
            </div>
          )}
        
    </div>
  )
}

export default Quiz