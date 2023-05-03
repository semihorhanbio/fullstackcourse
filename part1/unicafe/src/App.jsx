import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="average %" value={(good + neutral + bad) / 3} />
      <StatisticLine text="positive" value={(good + neutral) / 2} />
    </div>
  )
}

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
      {
        [good, neutral, bad].findIndex(item => item > 0) !== -1 ? <Statistics good={good} neutral={neutral} bad={bad}/> : <p>No feedback given</p>
      }
    </div>
  )
}

export default App