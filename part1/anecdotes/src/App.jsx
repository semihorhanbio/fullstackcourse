import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const getRandomNumber = () => Math.floor(Math.random() * anecdotes.length)

  const votesArr = Array(anecdotes.length).fill(0).map(() => getRandomNumber())
  
  const [selected, setSelected] = useState(getRandomNumber())
  const [votes, setVotes] = useState(votesArr)

  const increaseVote = () => {
    const copyVotes =  [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const maxVotedIndex = votes.indexOf(Math.max(...votes))
  

  return (
    <div>
      <h2>Anectode of the day</h2>
      <p>{anecdotes[selected]}<br/>has {votes[selected]} votes</p>
      <button onClick={() => setSelected(getRandomNumber)}>Another anecdote</button>
      <button onClick={increaseVote}>Vote</button>
      <h2>Anectode with most votes</h2>
      <p>{anecdotes[maxVotedIndex]}<br/>has {votes[maxVotedIndex]} votes</p>
    </div>
  )
}

export default App