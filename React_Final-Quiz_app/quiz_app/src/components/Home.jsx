import React from 'react'

import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();


  const  toPage = (to) => () =>  navigate(to)

  return (
    <>
      <header className="header">
        <h1 className="bold">Welcome to the <br/> Frontend Quiz!</h1>
        <p className='start_text'>Pick a subject to get started.</p>
      </header>
      
      <div className="quiz-list">
        <button onClick={toPage("/html")} className="quiz-button html">HTML</button>
        <button onClick={toPage("/css")} className="quiz-button css">CSS</button>
        <button onClick={toPage("/javascript")} className="quiz-button js">JavaScript</button>
        <button onClick={toPage("/accessibilty")} className="quiz-button accessibility">Accessibility</button>
      </div>
      </>
  )
}


export default Home