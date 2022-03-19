import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Visiting Countries without permission</h1>
            <h3>Available Countries: {countries.length}*</h3>
            <div className='countries-container'>
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            name={country.name.common}
                            flags={country.flags}
                            population={country.population}
                            capital={country.capital}
                            region={country.region}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;