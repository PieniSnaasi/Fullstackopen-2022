import { useState } from 'react'
import Person from './components/Person'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { number: '0445552059'}
  ]) 
  const [newName, setNewName] = useState('a new person')
  const [newNumber, setNewNumber] = useState('a new number')
  
  const addName = (event) => {
    event.preventDefault()

    const samaNimi = persons.filter((person) => person.name === newName)

    if (samaNimi.length === 0) {
      const personObject = {
        name: newName,
        number: newNumber,
    }   
  
    setPersons(persons.concat(personObject))
} else {
  alert (newName + ' is already added to phonebook')
} 
setNewName(" ");
setNewNumber(" ");
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  
 


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit= {addName}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}

        
        </div>
    </div>
  )

}

export default App
