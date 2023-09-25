import React, { useState } from 'react'
import SingleQuestion from './components/Question'
import data from './components/data'

const App = () => {
  const [Questions, setQuestions] = useState(data)
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className="container ">
        <h3 className='text-4xl font-bold'>question and answers about login</h3>
        <section className="info">
          {Questions.map((Question) => {
            return <SingleQuestion key={Question.id} {...Question} />
          })}
        </section>
      </div>
    </div>
  )
}

export default App