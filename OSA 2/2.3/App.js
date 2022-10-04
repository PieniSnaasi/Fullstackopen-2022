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
    return sum + part.exercises;
  }, 0);

  return <div>total of {total} exercises</div>;
};




const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      }
    ]
  }

  return <Course course={course} />
    
  
}

export default App