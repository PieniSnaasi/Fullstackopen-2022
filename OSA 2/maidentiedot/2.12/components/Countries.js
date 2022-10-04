import CountryData from './CountryData'

const Countries = ({ countriesToFind }) => {
    console.log(countriesToFind)
    if (countriesToFind.length === 1) {
      return <CountryData country={countriesToFind[0]} />;
    } else if (countriesToFind.length <= 10) {
      return (
        <div>
          {countriesToFind.map((country) => (
            <div key={country.name.official}>{country.name.common}</div>
          ))}
        </div>
      );
    } else if (countriesToFind.length > 10) {
      return <div>Too many matches, specify another filter</div>;
    }
  };

  export default Countries;