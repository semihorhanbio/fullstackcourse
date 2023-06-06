const Total = ({ parts }) => {

    const totalExercises = parts.reduce((acc, curr) => acc + curr.exercises, 0)

    return (
      <p>Total of exercises {totalExercises}</p>
    )
  }

  export default Total