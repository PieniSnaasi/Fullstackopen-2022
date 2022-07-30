const Header = (props) => {
  console.log(props)
  return (
    <div>
      
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.teht}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].part} teht={props.parts[0].teht}/>
      <Part part={props.parts[1].part} teht={props.parts[1].teht}/>
      <Part part={props.parts[2].part} teht={props.parts[2].teht}/>
      

      
    </div> 
  )
}

const Total = (props) => {
  console.log(props)
  
  return (
    <div>
      <p>{props.parts[0].teht + props.parts[1].teht + props.parts[2].teht}</p>
    </div>
  )
}



const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      part: 'Fundamentals of React',
      teht: 10
    },
    {
      part: 'Using props to pass data',
      teht: 7
    },
    {
      part: 'State of a component',
      teht: 14
    }
  ]
 


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} /> 
    </div>

  )
}

export default App