const FAILED_REQUEST = 'FAILED_REQUEST';
const SET_CONTENT_FILTER = 'SET_CONTENT_FILTER';
const SET_PAGE = 'SET_PAGE';
const EMPTY_CONTENT_FILTER = 'EMPTY_CONTENT_FILTER';
const SET_CONTENT_SELECT = 'SET_CONTENT_SELECT';
const FILTER_BY = 'FILTER_BY';
const SELECTED = 'SELECTED';
const COUNTRIES = 'COUNTRIES';
const INTERVAL_PAGINATION = 'INTERVAL_PAGINATION';

export const setIntervalPagination = (intervalPagination) => ({
  type: INTERVAL_PAGINATION, payload: intervalPagination
});

export const failedRequest = (error) => ({ 
  type: FAILED_REQUEST, payload: error
});

export const setPage = (page) => ({
  type: SET_PAGE, payload: page
});

export const setContentSelect = (contentSelect) => ({
  type: SET_CONTENT_SELECT, payload: contentSelect
});

export const setCountries = (countries) => ({
  type: COUNTRIES, payload: countries
});

export const filterBy = (filterBy) => {
  return (dispatch) => {
    dispatch(setFilterBy(filterBy));
    return fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((countries) => {
        contentForSelect(filterBy, countries, dispatch);
      });
  }
}

export const handleContentFilter = (content) => ({
  type: SELECTED, payload: content
});

export const fetchCountries = (filterBy, content) => {
  return (dispatch) => {
    dispatch(setFilterBy(filterBy));
    return fetch(`https://restcountries.eu/rest/v2/${ filterBy }/${ content }`)
      .then((response) => response.json())
      .then((countries) => {
        dispatch(setCountries(countries));
      });
  }
}

export const emptyContentFilter = () => ({
  type: EMPTY_CONTENT_FILTER
});

export const contentFilter = (content) => ({
  type: SET_CONTENT_FILTER, payload: content
});

const contentForSelect = (filterBy, countries, dispatch) => {
  console.log(filterBy);
  let filtered = [];
  if (filterBy === "region") {
    countries.forEach(({ region }) => {
      if (!filtered.includes(region) && region !== "") filtered.push(region);
    });
  } else if (filterBy === "capital") {
    countries.forEach(({ capital }) => {
      if (!filtered.includes(capital) && capital !== "") filtered.push(capital);
    });
  } else if (filterBy === "lang") {
    let isosCountries = [];
    let nameLangCountry = [];
    countries.forEach(({ languages }) => {
      languages.forEach(({ iso639_1, name}) => {
        if (!isosCountries.includes(iso639_1) && iso639_1 !== "" && iso639_1 !== null
          && !nameLangCountry.includes(name) && name !== "" && name !== null) {
            isosCountries.push(iso639_1);
            nameLangCountry.push(name);
            filtered.push([iso639_1, name]);
          } 
      });
    });
  } else if (filterBy === "name") {
    countries.forEach(({name}) => {
      if (!filtered.includes(name) && name !== "") filtered.push(name);
    });
  } else {
    countries.forEach(({ callingCodes }) => {
      callingCodes.forEach((callingCode) => {
        if (!filtered.includes(callingCode) && callingCode !== "" && callingCode !== null) filtered.push(callingCode);
      });
    });
  }
  console.log(filtered);
  dispatch(setContentSelect(filtered));
}

export const setFilterBy = (filterBy) => ({
  type: FILTER_BY, payload: filterBy
});
