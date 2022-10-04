import Person from './Person'

const Persons = ({existingPersons}) => {

    return(
        <div>
        {existingPersons.map((person) => (
          <Person key={person.name} person={person} />
        ))}

        
        </div>
    )

}

export default Persons