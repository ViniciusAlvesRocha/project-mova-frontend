const FILTER_BY = 'FILTER_BY';
const COUNTRIES = 'COUNTRIES';
const SET_PAGE = 'SET_PAGE';
const SET_CONTENT_SELECT = 'SET_CONTENT_SELECT';
const SELECTED = 'SELECTED';
const INTERVAL_PAGINATION = 'INTERVAL_PAGINATION';

const initialState = {
  page: 1,
  filterBy: '',
  contentSelect: [],
  selected: '',
  countries: [],
  intervalPagination: [1, 5],
};


export function countryReducer(state = initialState, action) {
    switch (action.type) {
      case FILTER_BY:
        return { ...state, filterBy: action.payload };
      case SELECTED:
        return { ...state, selected: action.payload };
      case SET_CONTENT_SELECT:
        return { ...state, contentSelect: [...action.payload] };
      case SET_PAGE:
        return { ...state, page: action.payload };
      case COUNTRIES:
        return { ...state, countries: [...action.payload] };
      case INTERVAL_PAGINATION:
        return { ...state, intervalPagination: action.payload };
      default:
        return state;
    }
  }
