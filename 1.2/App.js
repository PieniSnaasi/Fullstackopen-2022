const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.teht}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].nimi} teht={props.parts[0].teht}/>
      <Part part={props.parts[1].nimi} teht={props.parts[1].teht}/>
      <Part part={props.parts[2].nimi} teht={props.parts[2].teht}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Total amount of exercises is {props.parts[0].teht + props.parts[1].teht + props.parts[2].teht}</p>
  )
}

const App = () => {
  const course = {
    nimi: "Half Stack application development",
    parts: [
      {
        nimi: "Fundamentals of React",
        teht: 10
      },
      {
        nimi: "Using props to pass data",
        teht: 7
      },
      {
        nimi: "State of a component",
        teht: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.nimi} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App
