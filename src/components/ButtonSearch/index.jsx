import React from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../../action';
import StyledButtonSearch from './style';

const ButtonSearch = (props) => {

  const {
    filterBy,
    selected,
    fetchCountries,
  } = props;

  return(<StyledButtonSearch onClick={ () => fetchCountries(filterBy, selected) } >Pesquisar</StyledButtonSearch>);
}

const mapStateToProps = (state) => ({
  filterBy: state.filterBy,
  selected: state.selected,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountries: (filterBy, selected) => dispatch(fetchCountries(filterBy, selected))
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSearch);
