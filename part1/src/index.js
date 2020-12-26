import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) => {
  return (
    <h1>{course.course}</h1>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part part={content.content.part1} exercise={content.content.exercises1} />
      <Part part={content.content.part2} exercise={content.content.exercises2} />
      <Part part={content.content.part3} exercise={content.content.exercises3} />
    </div>
  )
}

const Part = (part) => {
  return (
    <p>
      {part.part} {part.exercise}
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
      <Content content={{ part1, exercises1 }} />
      <Content content={{ part2, exercises2 }} />
      <Content content={{ part3, exercises3 }} />
      <Footer number={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
