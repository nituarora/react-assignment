import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './app/store';

import CountryList from './features/country/countryList';
import CountryDetail from './features/country/countryDetail';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<CountryList />} />
          <Route path="/detail/:countryname" element={<CountryDetail />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;