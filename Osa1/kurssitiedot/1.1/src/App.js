const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.teht1}</p>
      <p>{props.part2} {props.teht2}</p>
      <p>{props.part3} {props.teht3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.lukumaara}</p>
    </div>
  )
}



const App = () => {
 
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const part2= "Using props to pass data"
  const part3= "State of a component"
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const yhteisluku = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} teht1={exercises1} />
      <Content part2={part2} teht2={exercises2} />
      <Content part3={part3} teht3={exercises3} />
      <Total lukumaara={yhteisluku} />
     
    </div>
  )
}

export default App