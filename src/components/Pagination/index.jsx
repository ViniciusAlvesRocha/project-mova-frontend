import React from 'react';
import ButtonPage from '../ButtonPage';
import ArrowLeft from '../../images/arrow-left.jpeg';
import ArrowRight from '../../images/arrow-right.jpeg';
import { connect } from 'react-redux';
import StyledPagination from './style';

const Pagination = (props) => {

  const { countries, page } = props;
  const numberPages = Math.ceil(countries.length / 10);
  
  const buttonsPage = () => {
  let buttonsPage = [];
  for (let index = 1; index <= numberPages; index += 1) {
    buttonsPage.push(
      <ButtonPage
        key={ index }
        numberPage={ index }
        className={ page === index ? "page-button-selected" : "page-button-styled-default" }
      />)
  }
    return buttonsPage;
  };

  const render = () => {
    let component = false;
    console.log(countries.length);
    if (countries.length !== 0) {
      component = (
        <StyledPagination>
          <button
            onClick={ () => {
              /* if (startPagination !== 1) {
                const sumEndPagination = endPagination - 1;
                setEndPagination(sumEndPagination);
                const sumStartPagination = startPagination - 1;
                setStartPagination(sumStartPagination);
              } */
            } }  
          ><img src={ ArrowLeft } alt="arrow left" /></button>
            { buttonsPage() }
          <button
            onClick={ () => {
             /*  if (endPagination <= numberPages) {
                const sumEndPagination = endPagination + 1;
                setEndPagination(sumEndPagination);
                const sumStartPagination = startPagination + 1;
                setStartPagination(sumStartPagination);
              }  */
            } }  
          ><img src={ ArrowRight } alt="arrow right" /></button>
        </StyledPagination>
      );
    }
    return component;
  }

  return (render());
}

const mapStateToProps = (state) => ({
  countries: state.countries,
  page: state.page,
});

export default connect(mapStateToProps)(Pagination);