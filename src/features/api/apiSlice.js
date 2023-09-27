import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    tagTypes: ['Get', 'Country'],
    endpoints: builder => ({})
})