import React from 'react';
import { connect } from 'react-redux';
import { ContainerCountries, FlagCountry } from './style';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
  const history = useHistory();
  let { countries, page } = props;

  countries = countries.slice((page - 1) * 10, page * 10)
  return (
    <ContainerCountries history = { history }>
      {
        countries.map(({ name, alpha2Code, flag }) => (
          <a key={ alpha2Code } href={ `/country/${ alpha2Code }` } >
            <FlagCountry key={ alpha2Code }>
              <img src={ flag } alt={ `country ${ name }` }/>
            </FlagCountry>
          </a>
        ))
      }
  </ContainerCountries>);
}

const mapStateToProps = (state) => ({
  countries: state.countries,
  page: state.page,
})

export default connect(mapStateToProps)(Countries);