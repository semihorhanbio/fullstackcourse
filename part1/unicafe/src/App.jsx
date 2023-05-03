import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(prevClick => prevClick + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(prevClick => prevClick + 1)
  }

  const handleBadClick = () => {
    setBad(prevClick => prevClick + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App