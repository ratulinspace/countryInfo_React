import React from 'react';
import './Contry.css';

const Country = (props) => {
    return (
        <div className='country'>
            <h2>{props.name}</h2>
            <img src={props.flags.png} alt="" />
            <p>Capital : {props.capital}</p>
            <p>Population : {props.population}</p>
            <p>Region : {props.region}</p>
        </div>
    );
};

export default Country;