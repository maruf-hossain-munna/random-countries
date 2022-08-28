const randomCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');
    
    // for(const country of countries){
    //     console.log(country);
    //     // const countryDiv = document.createElement('div');
    //     // countryDiv.innerHTML = `
    //     // <h3> Name:   </h3>
    //     // `;
    //     // countriesContainer.appendChild(countryDiv);
    // }

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        console.log(country)
        countryDiv.innerHTML = `
        <h3>Country Name: ${country.name.common}  </h3>
        <p> Capital: ${country.capital ? country.capital[0] : 'No capital'} </p>
        `;
        countriesContainer.appendChild(countryDiv);
    })
    
}

randomCountries()