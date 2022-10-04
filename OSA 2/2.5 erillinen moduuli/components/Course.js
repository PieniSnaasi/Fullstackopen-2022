import React from 'react'

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

  export default Course