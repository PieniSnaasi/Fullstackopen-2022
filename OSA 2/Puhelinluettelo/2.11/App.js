import { useState, useEffect } from 'react'
//import Person from './components/Person'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

import axios from 'axios'






const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState({name: '', number: ''})
  
  const [finder, setFinder] = useState('')
  const [existingPersons, setExistingPersons] = useState([])

  const addName = (event) => {
    event.preventDefault()

    const samaNimi = persons.filter((person) => person.name === newPerson.name)

    if (samaNimi.length === 0) {
      
    setPersons(persons.concat(newPerson))
    setExistingPersons(existingPersons.concat(newPerson))

   } else {
    alert (`${newPerson.name}  is already added to phonebook`)
    } 
    setNewPerson({name: '', number:''})
  }

  

  const handlePersonChange = (event) => {
    const { name, value } = event.target;
    setNewPerson({ ...newPerson, [name]: value });
  }
  
  const findName = (event) => {

    const find = event.target.value
    setFinder(find)
    setExistingPersons(
      persons.filter((person) => person.name.includes(find))
    )
  }
   

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setExistingPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  


  
 


  return (
    <div>
      <h1>Phonebook</h1>
      <h3>Search</h3>
      
      <Filter finder={finder} findName={findName}/>
      <h2>add a new</h2>
      <PersonForm addName={addName}
      handlePersonChange={handlePersonChange}
      newPerson={newPerson}/>
      <h2>Numbers</h2>
      <Persons existingPersons={existingPersons} />
    </div>
  )

}

export default App
