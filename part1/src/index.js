import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
  return (
    <h1>{course.course}</h1>
    )
}

const Content = (part) => {
  return (
    <p>
      {part.part} {part.numberOfExercises}
    </p>
  )
}

const Footer = (exercises) => {
  return (
    <p>Number of exercises {exercises.number}</p>
  )
}
  
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} numberOfExercises={exercises1} />
      <Content part={part2} numberOfExercises={exercises2} />
      <Content part={part3} numberOfExercises={exercises3} />
      <Footer number={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
