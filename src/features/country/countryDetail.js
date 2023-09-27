import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {

    const { countryname } = useParams();

    return (
        <>
            <div>
                <h1>Country Detail Page</h1>
                <p>Country Name: {countryname}</p>
            </div>
        </>
    )
}

export default CountryDetail