import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StyledCountryDetails from './style';
import { connect } from 'react-redux';
import Countries from '../../components/Countries';
import { setCountries, filterBy, handleContentFilter } from '../../action';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const { setCountries, filterBy, handleContentFilter } = props;
  const { code } = useParams();
  const [{ 
    flag,
    name,
    capital,
    region,
    subregion,
    population,
    languages
  }, setCurrentCountry ] = useState('');

  const getNeighboringCountries = (alpha2Code, subregion) => {    
    fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((countries) => {
      let neighboringCountries = [];
      countries.forEach((country) => {
        if (subregion === country.subregion && alpha2Code !== country.alpha2Code) {
          neighboringCountries.push(country);
        }
      });
      setCountries(neighboringCountries);
    });
  };

  // ComponentDidMount:
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${ code.toLowerCase() }`)
    .then((response) => response.json())
    .then((country) => {
      const { alpha2Code, subregion } = country;
      setCurrentCountry(country);
      //selecionando os países vizinhos:
      getNeighboringCountries(alpha2Code, subregion);
    });
  }, []);

  // ComponentWilUnmount:
  useEffect(() => {
    return () => {
      handleContentFilter(region);
      setCountries([]);
      filterBy('region');
    }
  }, [region]);

  return (
    <>
      <StyledCountryDetails className="container">
        <div className="country-details">
          <img src={ flag } alt={ `flag ${ name }` } />
          <div>
            <span>Nome: { name }</span>
            <span>Capital: { capital }</span>
            <span>Região: <Link to="/" >{ region }</Link></span>
            <span>Sub-região: { subregion }</span>
            <span>População: { population?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") }</span>
            <span>Línguas: { languages?.map(({ nativeName }) => `${ nativeName } `) }</span>
          </div>
        </div>
        <h3 className="heading-neighboring-countries" >Países Vizinhos:</h3>
        <Countries />
      </StyledCountryDetails>
    </>);
}

const mapDispatchToProps = (dispatch) => ({
  setCountries: (countries) => dispatch(setCountries(countries)),
  filterBy: (content) => dispatch(filterBy(content)),
  handleContentFilter: (optionSelected) => dispatch(handleContentFilter(optionSelected))
});
export default connect(null, mapDispatchToProps)(CountryDetails);
