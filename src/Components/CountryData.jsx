const CountryData = ({ country }) => {
  return (
    <div>
        <h2>{country.name.common}</h2>
        <p><span className='bold'>Capital:</span> {country.capital}</p>
        <p><span className='bold'>Area:</span> {country.area} km<sup>2</sup></p>
        <p><span className='bold'>Languages:</span></p>
        <ul>
            {Object.values(country.languages).map((l) => <li key={l}>{l}</li>)}
        </ul>
        <p><span className='bold'>Flag:</span></p>
        <img src={country.flags.png}/>
        
    </div>
  )
}

export default CountryData