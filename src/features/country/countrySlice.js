import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const countryAdapter = createEntityAdapter({
    selectId: (country)=>country.id
})

const initialState = countryAdapter.getInitialState()

export const countrySlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCountry: builder.query({
            query: () => '/all',
            transformResponse: (responseData) => {
                const response = responseData?.map((data)=>{
                    return {'id': data.name.common
                    ,'countryname':data.name.common,
                    "countryFlag":data.flags,
                    "capital":data.capital,
                    "region":data.region}
                })
                console.log("responseData==",response)
                return countryAdapter.setAll(initialState, response)
            },
         
        })
    })
})

export const {
    useGetCountryQuery
} = countrySlice