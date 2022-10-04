import {useState,useEffect} from 'react'
import axios from 'axios'
//import CountryData from './components/CountryData'
import Countries from './components/Countries'









function App() {
const [countries, setCountries] = useState([])
const [browse, setBrowse] = useState ('')
const [countriesToFind, setCountriesToFind] = useState([])

useEffect(() => {
  console.log('effect')
  axios
    .get('https://restcountries.com/v3.1/all').then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
}, [])

const handleChange = (event) => {
  const browse = event.target.value
  
    setBrowse(browse)
    setCountriesToFind(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(browse.toLowerCase()))
    )
}

/*const hook = () => {
  console.log('effect')
  axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
}

useEffect(hook, [])
console.log('render', countries.length, 'countries')*/

  return (
    <div>
      <h2>Country explore</h2>
      Find countries <input value={browse} onChange={handleChange} />
    
    
    <div>
    <Countries countriesToFind={countriesToFind} />
        
    </div>
    </div>
  );
}

export default App;
