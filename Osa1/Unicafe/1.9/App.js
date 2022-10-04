import { useState } from 'react'

const Header = (props) => {
return (
  <div>
    <h1>
      {props.header}
    </h1>
  </div>
)
}

const Subtitle = (props) => {
  return (
    <div>
      <h2>{props.subtitle}</h2>
      
      
    </div>
  )
  }

  //Some previous code

//const Goodbutton = ({ good}) => <div>Good {good}</div>

//const Neutralbutton = ({neutral}) => <div>Neutral {neutral}</div>

//const Badbutton = ({bad}) => <div>Bad {bad}</div>

//const Allclicks = ({all}) => <div>All {all}</div>
  
//const Averagecounter =({average}) => <div>Average {average}</div>

//const Positivecounter = ({positive}) => <div>Positive {positive} %</div>

const Button = (props) => {
  
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const Statistics = (props) => {
  return(
<div>{props.text} {props.value}</div>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const goodclick = () => setGood(good+1) 
  const neutralclick = () => setNeutral(neutral+1)
  const badclick = () => setBad(bad + 1)
  const all = good + neutral + bad
  const average = ((good - bad ) / all)
  const positive =((good / all)* 100)  
  
 if (all=== 0) {
  return (
    <div>
    <Header header="Give feedback" />
     
     <Button 
     handleClick={goodclick}
     text='good'
     />
     <Button 
     handleClick={neutralclick}
     text='neutral'
     />
     <Button 
     handleClick={badclick}
     text='bad'
     />
  
     <Subtitle subtitle="statistics" />
     <Statistics text="No feedback given" />
    </div>
  )
 }
  

  return (
    <div>
      <Header header="Give feedback" />
     
      <Button 
      handleClick={goodclick}
      text='good'
      />
      <Button 
      handleClick={neutralclick}
      text='neutral'
      />
      <Button 
      handleClick={badclick}
      text='bad'
      />
   
      <Subtitle subtitle="statistics" />
      

      <Statistics text="Good" value= {good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={all} />
      <Statistics text="average" value={average} />
      <Statistics text="positive" value={positive} />
      

    </div>
  )
}

export default App
