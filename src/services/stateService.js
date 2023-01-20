import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// redux eto state obrabot4ik dlja raznyh bibliotek.
// Osnovy redux ochen shozhy s react state.
// Kak u useState u redux est' iznachal'noe sostojanie i funkcqja dlja izmenenie sostojanija.


const initialState = {
    showSearchBar: false,
    searchParams: {
        lat: 59.4370,
        lon: 24.7536,
        units: 'metric',
        lang: 'en',
        city: 'Tallinn',
    },
    forecastSelectedData: null,
    errorMessage: null,
};

// Funkcqii izmenenija sostojanija v redux nazqvajutsa 'Action'
// Action sosdajot object v kotorom jest jego tip i object payload v kotorom budut hranitsja novqje dannye
export const setSearchParams = createAction('setSearchParams');
export const setShowSearchBar = createAction('setShowSearchBar');
export const setForecastSelectedData = createAction('setForecastSelectedData');
export const setErrorMessage = createAction('setErrorMessage');

// reducer ispolzujetsa dlja opredelenija chto budet delat' Action;
// My sozdajom funkcqii s nazvanijem Actiona i v kotorqh opisqvajem chto proizojdot.
// V nashem slu4ii my menjajem sostojanije. 

const reducer = createReducer(initialState, {
    [setSearchParams]: (iState, action) => {
        iState.searchParams = action.payload;
    },
    [setShowSearchBar]: (iState, action) => {
        iState.showSearchBar = action.payload;
    },
    [setForecastSelectedData]: (iState, action) => {
        iState.forecastSelectedData = action.payload;
    },
    [setErrorMessage]: (iState, action) => {
        iState.errorMessage = action.payload;
    },
});

// store eto oblako gde hranitsja vsja informacija o sostojanii.
export const store = configureStore({ reducer });
