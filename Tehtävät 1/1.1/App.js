const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
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
 
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const yhteisluku = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content part1="Fundamentals of React" teht1={exercises1} />
      <Content part2="Using props to pass data" teht2={exercises2} />
      <Content part3="State of a component" teht3={exercises3} />
      <Total lukumaara={yhteisluku} />
     
    </div>
  )
}

export default App
