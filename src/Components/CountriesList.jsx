import CountryData from './CountryData'

const CountriesList = ({ countries, countryToShow }) => {
    if (countries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }

    if (countries.length === 1) {
        return (
            <CountryData country={countries[0]}/>
        )
    }

    if (countries.length > 1) {
        return (
          <div>
              {countries.map(c => 
                <div key={c.name.common}>
                    <p>{c.name.common}</p>
                    <button onClick={() => countryToShow(c.name.common)}>
                        show
                    </button>
                </div>
                )}
          </div>
        )
    }
}

export default CountriesList