import React from 'react'

const QuestionCards = 
({data,
  onAnswer, 
  showFeedback,
  selected, 
  current,
  total,
  score
}) => {
    const { question, options, answer } = data;

    const getButtonStyle = (option) =>{
      if (!showFeedback)
        return "bg-blue-500 hover:bg-indigo-600 hover:scale[1.01"

      // if selected option is not equal to the right answer
      if (option === answer) return "bg-emerald-600"; 

      // if selected option is equal to the right answer
      if (option === selected) return "bg-rose-600"; 
      
    }

  return (
    <div className=''>
      <p className='font-semibold text-xl  text-center mb-2'>Score: {score}</p>

    <div className='bg-blue-950/50 p-4 rounded-2xl shadow-lg max-w-xl border border-blue-500 mr-[10%] ml-[10%]'>
      

      <div className=' flex justify-between items-center'>
        <h2 className=' text-s  text-gray-300'>
          Question {current + 1} of {total}
        </h2>
        
        <span className='bg-blue-900 rounded-full px-4 py-1'>
          {selected 
          ? Math.round(((current + 1)/total) *100) + "% complete"
          : Math.round((current /total) *100) + "% complete"
          } 
        </span>
      </div>

      <div  className=' p-4 rounded-2xl shadow-lg bg-blue-900 max-w-xl border border-blue-500 m-[5%] font-bold text-lg'>
      <p>{question}</p></div>

      <div className='grid gap-5 m-[5%]'>
        {options.map((option, index) =>
        <button 
        className={`${getButtonStyle(option)}  p-4 rounded-2xl shadow-lg max-w-xl border border-blue-600 font-semibold`}
        key={index}
         
         onClick={() => onAnswer(option)}
         disabled={showFeedback}

         >
          {option}
        </button>
        )}

      </div>
      </div></div>
    
  )
}

export default QuestionCards