import { Link } from 'react-router-dom'
import { useGetCountryQuery } from './countrySlice'
import React from 'react';
import Carousal from './Carousal';

const CountryList = () => {

    const {
        data: countryData,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCountryQuery()

    let content;

    if (isLoading) {
        content = "Loading...";
    } else if (isSuccess) {
        const countries = countryData.entities;
        const countryIds = countryData.ids;

        var reqData = []
        content = (
            <>
                {countryIds.map((countryId) => {
                    const country = countries[countryId];
                    reqData.push({ "countryname": country.countryname, "image": country.countryFlag })
                })}
                {/* call carousel component */}
                <Carousal countryData={reqData} />
            </>
        );

    } else if (isError) {
        content = <p>{error}</p>;
    }

    return content
}

export default CountryList

