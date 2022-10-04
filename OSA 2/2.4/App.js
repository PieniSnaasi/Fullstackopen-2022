const Course = ({course}) => {
  console.log ('props value is' + course)
  return (
    
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    )
}

const Header = ({ name }) => {
  
  return  <h1>{name}</h1>
}

const Part = ({ name, exercises }) => {
  console.log ('props value is' + {name, exercises})

  return (
    <p>
      
        {name} {exercises}
      </p>
      
  )
}

const Content = ({ parts }) => { 
  console.log ('props value is' + parts)
  return (
    <div>
          {parts.map((part) => (
            <Part key={part.id} name={part.name} exercises={part.exercises} />         
           ))}
    
    </div> 
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises 
  },0)

  return <div>total of {total} exercises</div>
}




const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return ( <div>
    
    {courses.map(course => 
          <Course key={course.id} course={course} />
        )}
    
    </div>
  )
}

export default App